<template>
  <product-form />
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ProductForm from '@/components/ProductForm.vue';

  @Component({
    components: {
      ProductForm,
    },
  })
  export default class AddProduct extends Vue {}
</script>
