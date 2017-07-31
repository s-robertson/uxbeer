<template>
  <div class="token-bar">
    <el-button @click="spendToken" type="primary" class="token-bar__button" title="Spend token">
      <i class="el-icon-minus"></i>
    </el-button>
    <div class="token-bar__count">
      <div class="token-bar__count-inner">
        {{ myTokenCount }}
      </div>
    </div>
    <el-button @click="addToken" type="primary" class="token-bar__button" title="Add token">
      <i class="el-icon-plus"></i>
    </el-button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { Button, Icon } from 'element-ui';

  export default {
    components: {
      Icon,
      ElButton: Button,
    },
    data() {
      return {
        spendCount: 0,
      };
    },
    computed: {
      ...mapGetters(['myTokenCount']),
    },
    methods: {
      ...mapActions(['spendToken', 'addToken']),
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .token-bar {
    text-align: center;
    padding: 15px;
  }

  .token-bar__count {
    display: inline-block;
    font-size: 50px;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border: 5px solid $brand-secondary-dark;
    padding: 3px;
    margin: 0 15px;
    background: #fff;
  }

  .token-bar__count-inner {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    background: $brand-secondary;
    color: #fff;
  }

  .token-bar__button {
    color: #fff;
    font-size: 35px;
    cursor: pointer;
  }
</style>
