<template>
  <div class="page-home">
    <h2>My Tokens</h2>
    <token-bar v-if="myTokenCount !== false"></token-bar>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import { Button } from 'element-ui';
  import TokenBar from '@/components/TokenBar';

  export default {
    components: {
      ElButton: Button,
      TokenBar,
    },
    computed: {
      ...mapState({
        currentUser: 'currentUser',
      }),
      ...mapGetters([
        'myTokenCount',
      ]),
    },
  };
</script>
