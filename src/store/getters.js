import _ from 'lodash';

export default {
  myTokenCount(state) {
    let count = false;

    if (_.has(state, ['currentUser', 'uid']) && _.has(state, ['users', state.currentUser.uid])) {
      count = state.users[state.currentUser.uid].tokens;
    }
    return count;
  },
  myInfo(state) {
    let info = null;

    if (state.currentUser && _.has(state, ['users', state.currentUser.uid])) {
      info = state.users[state.currentUser.uid];
    }

    return info;
  },
  userStats(state) {
    let stats = null;

    if (state.users !== null) {
      const userKeys = Object.keys(state.users);

      if (userKeys.length > 0) {
        stats = userKeys.map(key => state.users[key]);
      }
    }

    return stats;
  },
};
