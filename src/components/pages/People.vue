<template>
  <div class="page-people">
    <user-list :users="userStats"></user-list>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import UserList from '@/components/presentational/UserList';

  export default {
    computed: {
      ...mapGetters(['userStats']),
    },
    components: {
      UserList,
    },
  };
</script>
