<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group id="email" label="Email:" label-for="input-email">
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Password:" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { ROUTE } from '@/constants';

  @Component
  export default class LoginForm extends Vue {
    private data() {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    }
    private onSubmit() {
      this.$router.push({ path: ROUTE.ADD_PRODUCT.path });
    }
  }
</script>

<style lang="scss">
  button {
    align-self: center;
    margin-top: 20px;
  }
</style>
