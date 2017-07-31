import _ from 'lodash';
import UxBeer from '@/store/services/UxBeer';

const uxBeer = new UxBeer();

const handleError = (error) => {
  console.log(error);
};

const addTokenRequest = _.debounce(
  async ({ state, commit, addTokenCount }) => {
    try {
      commit('addTokenRequest');
      await uxBeer.updateUserTokens(state.currentUser.uid, addTokenCount);
      commit('addTokenResponse', true);
      commit('updateAddTokenCount', 0);
    } catch (error) {
      handleError(error);
      commit('addTokenResponse', false);
      commit('updateAddTokenCount', 0);
    }
  },
  500);

const spendTokenRequest = _.debounce(
  async ({ state, commit, spendTokenCount }) => {
    try {
      commit('spendTokensRequest');
      await uxBeer.updateUserTokens(state.currentUser.uid, spendTokenCount, 'decrement');
      commit('updateSpendTokenCount', 0);
      commit('spendTokensResponse', { success: true });
    } catch (error) {
      handleError(error);
      commit('updateSpendTokenCount', 0);
      commit('spendTokensResponse', { success: false });
    }
  },
  500);

export default {
  addToken({ state, commit, getters }) {
    const initialTokenCount = getters.myTokenCount;

    if (initialTokenCount !== false) {
      let addTokenCount = state.tokenCounts.adding;
      addTokenCount += 1;

      commit('updateAddTokenCount', addTokenCount);

      commit('updateUserTokens', {
        userId: state.currentUser.uid,
        tokenCount: 1,
      });

      addTokenRequest({ state, commit, addTokenCount, initialTokenCount });
    }
  },
  spendToken({ state, commit, getters }) {
    const initialTokenCount = getters.myTokenCount;

    if (initialTokenCount !== false && initialTokenCount > 0) {
      let spendTokenCount = state.tokenCounts.spending;

      spendTokenCount += 1;

      commit('updateSpendTokenCount', spendTokenCount);

      // Optimistically update the user's token count.
      commit('updateUserTokens', {
        userId: state.currentUser.uid,
        tokenCount: -1,
      });

      spendTokenRequest({ state, commit, spendTokenCount });
    }
  },
  async authenticate({ commit }, { email, password }) {
    commit('authenticationRequest');

    try {
      await uxBeer.authenticate(email, password);
      commit('authenticationResponse', true);
    } catch (error) {
      handleError(error);
      commit('authenticationResponse', false);
    }
  },
  async signOut({ commit }) {
    commit('signOutRequest');

    try {
      await uxBeer.signOut();
      commit('signOutResponse', true);
    } catch (error) {
      handleError(error);
      commit('signOutResponse', false);
    }
  },
  bootstrap({ commit }) {
    uxBeer.init(commit);
  },
};
