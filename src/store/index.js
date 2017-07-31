import mutations from '@/store/mutations';
import actions from '@/store/actions';
import getters from '@/store/getters';

export default {
  state: {
    currentUser: false,
    users: null,
    bootstrapped: false,
    tokenCounts: {
      spending: 0,
      adding: 0,
    },
    authentication: {
      email: '',
      password: '',
      authenticating: false,
      signingOut: false,
    },
  },
  actions,
  mutations,
  getters,
};
