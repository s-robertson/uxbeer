export default {
  authenticationRequest(state) {
    state.authentication.authenticating = true;
  },
  authenticationResponse(state) {
    state.authentication.authenticating = false;
  },
  bootstrap(state) {
    state.bootstrapped = true;
  },
  signOutRequest(state) {
    state.authentication.signingOut = true;
  },
  signOutResponse(state) {
    state.authentication.signingOut = false;
  },

  spendTokensRequest() {},
  spendTokensResponse() {},
  addTokenRequest() {},
  addTokenResponse() {},
  updateUserTokens(state, { userId, tokenCount, override = false }) {
    if (override) {
      state.users[userId].tokens = tokenCount;
    } else {
      state.users[userId].tokens += tokenCount;
    }
  },
  updateCurrentUser(state, { user }) {
    state.currentUser = user;
  },
  updateSpendTokenCount(state, count) {
    state.tokenCounts.spending = count;
  },
  updateAddTokenCount(state, count) {
    state.tokenCounts.adding = count;
  },
  updateUsers(state, { users }) {
    state.users = users;
  },
};
