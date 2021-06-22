import { shallowMount, createLocalVue } from '@vue/test-utils';
import ProductForm from '@/components/ProductForm.vue';
import BootstrapVue, { BForm } from 'bootstrap-vue';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe('ProductForm.vue', () => {
    it('renders login form component', () => {
        const wrapper = shallowMount(ProductForm, { localVue });
        expect(wrapper.find(BForm).exists()).toBe(true);
    });
});
