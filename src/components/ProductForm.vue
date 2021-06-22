<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <h5>Add Product</h5>
      <b-form-group
        id="product-name"
        label="Product Name:"
        label-for="input-product-name"
      >
        <b-form-input
          id="input-product-name"
          v-model="productForm.productName"
          type="text"
          placeholder="Enter Product Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="price"
        label="Price (In Rs):"
        label-for="input-product-price"
      >
        <b-form-input
          id="input-product-price"
          v-model="productForm.price"
          type="number"
          placeholder="Enter price"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { ROUTE, ACTION_TYPES } from '@/constants';

  @Component
  export default class ProductForm extends Vue {
    private data() {
      return {
        productForm: {
          productName: '',
          price: null,
        },
      };
    }
    private onSubmit() {
      const product = {
        name: this.$data.productForm.productName,
        price: this.$data.productForm.price,
      };

      /* Vuex - Dispatching action to add the product in product list */
      this.$store.dispatch(ACTION_TYPES.ADD_PRODUCT, product);

      /* Vue - Router push */
      this.$router.push({ path: ROUTE.PRODUCT_LIST.path });
    }
  }
</script>

<style lang="scss">
  button {
    align-self: center;
    margin-top: 20px;
  }
</style>
