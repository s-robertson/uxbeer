<template>
  <div id="app">
    <app-header></app-header>

    <div class="page-content app-container">
      <login-form v-if="currentUser === null" @onSubmit="authenticationRequest"></login-form>
      <router-view v-else-if="currentUser"></router-view>
    </div>

    <footer>
      <div class="app-container">
        <el-button v-if="currentUser" :loading="signingOut" @click="signOut">Logout</el-button>
      </div>
    </footer>
  </div>
</template>

<script>
  import { Button } from 'element-ui';
  import { mapState, mapMutations, mapActions } from 'vuex';

  import AppHeader from '@/components/AppHeader';
  import LoginForm from '@/components/presentational/LoginForm';

  export default {
    dependencies: ['authentication'],
    methods: {
      ...mapMutations([
        'authenticationRequest',
      ]),
      ...mapActions([
        'signOut',
      ]),
    },
    data() {
      return {
        loader: null,
      };
    },
    computed: {
      ...mapState({
        currentUser: 'currentUser',
        signingOut: state => state.authentication.signingOut,
      }),
    },
    components: {
      ElButton: Button,
      LoginForm,
      AppHeader,
    },
  };
</script>

<style scoped>
  .page-content {
    padding: 20px;
  }
</style>
