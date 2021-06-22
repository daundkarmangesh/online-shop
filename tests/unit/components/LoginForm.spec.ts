import { shallowMount, createLocalVue } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';
import BootstrapVue, { BFormInput } from 'bootstrap-vue';

const localVue = createLocalVue();

localVue.use(BootstrapVue);

describe('LoginForm.vue', () => {
    it('renders login form component', () => {
        const wrapper = shallowMount(LoginForm, { localVue });
        expect(wrapper.find(BFormInput).exists()).toBe(true);
    });
});
