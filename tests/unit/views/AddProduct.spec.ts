import { shallowMount } from '@vue/test-utils';
import AddProduct from '@/views/AddProduct.vue';
import ProductForm from '@/components/ProductForm.vue';

describe('AddProduct.vue', () => {
  it('renders product form component', () => {
    const wrapper = shallowMount(AddProduct);
    expect(wrapper.find(ProductForm).exists()).toEqual(true);
  });
});
