<template>
  <b-navbar
    toggleable="md"
    type="dark"
    v-if="showNavBar">
    <b-navbar-brand>Online Shop</b-navbar-brand>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { PRODUCT_PAGES } from '@/constants';

@Component
export default class NavBar extends Vue {
  @Watch('$route', { immediate: true, deep: true })
  private onUrlChange(newVal: any) {
    // Show-hide navbar based on route path
    const route = this.$route.path;
    this.$data.showNavBar = PRODUCT_PAGES.includes(route);
  }

  private data() {
    return {
        showNavBar: false,
    };
  }
}
</script>

<style lang="scss">
.navbar-brand {
  padding-left: 14px;
}
</style>