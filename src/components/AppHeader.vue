<template>
  <header class="app-header">
    <div class="app-container">
      <el-row>
        <el-col>
          <img src="../assets/beer.svg" alt="Beer emoji" class="app-header__logo">
          <h1 class="app-header__title">UX Beer</h1>
        </el-col>
        <el-col>
          Hi, {{ myInfo.name }}
        </el-col>
      </el-row>

      <div class="app-header__user-info">
      </div>
    </div>
  </header>
</template>

<script>
  import { Icon, Row, Col } from 'element-ui';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app-header',
    computed: {
      ...mapGetters([
        'myInfo',
      ]),
    },
    components: {
      Icon,
      ElRow: Row,
      ElCol: Col,
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .app-header {
    background: $brand-primary;
    color: #fff;
  }

  .app-header__logo {
    width: 40px;
  }

  .app-header {
    padding: $base-spacing-unit-small 0;
  }

  .app-header__logo {
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
  }

  .app-header__title {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0;
  }

  .app-header__user-info {
    display: inline-block;
    vertical-align: middle;
  }

</style>
