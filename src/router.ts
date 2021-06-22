import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import AddProduct from './views/AddProduct.vue';
import ProductList from './views/ProductList.vue';
import { ROUTE } from '@/constants';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: ROUTE.HOME.path,
      name: ROUTE.HOME.name,
      component: Login,
    },
    {
      path: ROUTE.LOGIN.path,
      name: ROUTE.LOGIN.name,
      component: Login,
    },
    {
      path: ROUTE.ADD_PRODUCT.path,
      name: ROUTE.ADD_PRODUCT.name,
      component: AddProduct,
    },
    {
      path: ROUTE.PRODUCT_LIST.path,
      name: ROUTE.PRODUCT_LIST.name,
      component: ProductList,
    },
    { path: '*', redirect: ROUTE.HOME.path },
  ],
});
