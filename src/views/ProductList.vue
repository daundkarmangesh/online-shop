<template>
  <list :product-list="productList"/>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import List from '@/components/List.vue';

  @Component({
    components: {
      List,
    },
  })
  export default class ProductList extends Vue {
      private data() {
          return {
              productList: [],
          };
      }

      private created() {
        this.$data.productList = this.$store.getters.getProductList;
      }
  }
</script>
