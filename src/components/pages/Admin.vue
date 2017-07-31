<template>
  <div class="page-admin">
    <user-list :users="users"></user-list>
  </div>
</template>

<script>
  import UserList from '@/components/presentational/UserList';
  import { mapState } from 'vuex';

  export default {
    components: {
      UserList,
    },
    computed: {
      ...mapState({
        users: 'users',
      }),
    },
  };
</script>
