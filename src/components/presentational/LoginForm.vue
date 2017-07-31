<template>
  <div class="login-form">
    <el-form @submit.native.prevent>
      <el-form-item label="Email">
        <el-input v-model="email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading="authenticating" type="primary" native-type="submit"
                   @click="onSubmit">Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { Form, FormItem, Input, Button } from 'element-ui';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'login-form',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    computed: {
      ...mapState({
        authenticating: state => state.authentication.authenticating,
      }),
    },
    methods: {
      ...mapActions(['authenticate']),
      onSubmit() {
        this.authenticate({
          email: this.email,
          password: this.password,
        });
      },
    },
    components: {
      ElButton: Button,
      ElInput: Input,
      ElForm: Form,
      ElFormItem: FormItem,
    },
  };
</script>
