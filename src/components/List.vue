<template>
  <div>
    <div class="list-container">
      <h5>Product List</h5>
      <b-input
        type="text"
        name="search-value"
        class="searchValue"
        v-model="searchValue"
        @keyup="getFilteredList()"
        placeholder="searchValue Product.."
      />
      <b-card
        :title="listItem.name"
        name="item-card"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        v-for="listItem in filteredList"
        v-bind:key="listItem.id"
      >
        <div class="cart">
          <b-form-checkbox
            id="checkbox-1"
            name="selected"
            v-model="listItem.isSelected"
            value="listItem.price"
            style="zoom:2;"
            @change="calculateTotal($event)"
            class="check"
          ></b-form-checkbox>
          <b-button class="price-btn">Rs {{ listItem.price }}</b-button>
        </div>
      </b-card>
    </div>
    <h4 class="success-message">{{getPayableAmount()}}</h4>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class List extends Vue {
    @Prop() private productList!: [];
    private data() {
      return {
        searchValue: '',
        filteredList: this.$props.productList,
        totalAmount: 0,
      };
    }

    private created() {
      /* Array Prototype - forEach */
      this.$props.productList.forEach((item: any) => {
        item.isSelected = false;
      });
    }

    private calculateTotal() {
      this.$data.totalAmount = 0;

      /* ES6-feature - let keyword */
      let i = 0;

      /* ES6-feature - Iterator For..Of */
      for (const item of this.$props.productList) {
        if (item.isSelected) {
          i += Number(item.price);
        }
      }
      this.$data.totalAmount = i;
    }
    private getPayableAmount() {
      /* ES6-feature - Template Literals */
      return `Total Amount is ${this.$data.totalAmount}`;
    }

    private getFilteredList() {
      /* ES6-feature - Spread Operator */
      this.$data.filteredList = [...this.$props.productList];

      /* Array prototype - filter method */
      this.$data.filteredList = this.$props.productList.filter((product: any) =>
        product.name.toLowerCase().includes(this.$data.searchValue.toLowerCase()),
      );
    }
  }
</script>

<style lang="scss">
  .list-container {
    display: block;
    max-height: 500px;
    overflow: auto;
    padding: 10px;

    .searchValue {
      margin: 20px auto;
      width: 320px;
    }

    .card,
    .card-title {
      margin: 0 auto;
    }
  }

  .success-message {
    padding-top: 30px;
    text-align: center;
  }

  .cart {
    width: 100%;

    .check,
    .price-btn {
      display: inline-block;
    }

    .price-btn {
      float: right;
    }
  }
</style>
