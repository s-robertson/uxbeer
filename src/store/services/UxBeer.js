import * as Firebase from 'firebase';
import firebaseConfig from '@/config/firebase';

class UxBeer {
  constructor() {
    this.firebaseApp = Firebase.initializeApp(firebaseConfig);
    this.database = this.firebaseApp.database();
    this.auth = this.firebaseApp.auth();
  }

  authenticate(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }

  init(commit) {
    this.auth.onAuthStateChanged((user) => {
      commit('updateCurrentUser', { user });

      if (user) {
        this.suscribeToDatabase(commit);
      } else {
        this.unsubscribeFromDatabase();
      }
    });
  }

  suscribeToDatabase(commit) {
    this.database.ref('/users').on('value', (snapshot) => {
      commit('updateUsers', {
        users: snapshot.val(),
      });
    });
  }

  unsubscribeFromDatabase() {
    if (this.database.off) {
      this.database.off();
    }
  }

  updateUserTokens(userId, tokenCount, action = 'increment') {
    return this.database.ref(`/users/${userId}`).transaction((user) => {
      if (user) {
        if (action === 'increment') {
          user.tokens += tokenCount;
        } else if (action === 'decrement') {
          user.tokens -= tokenCount;
        }
      }

      return user;
    });
  }
}

export default UxBeer;
