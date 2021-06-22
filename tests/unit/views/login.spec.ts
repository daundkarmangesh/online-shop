import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import LoginForm from '@/components/LoginForm.vue';

describe('Login.vue', () => {
  it('renders login form component', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Login, {
    //   propsData: { msg }
    });
    // expect(wrapper.text()).toMatch(msg);
    expect(wrapper.find(LoginForm).exists()).toEqual(true);
  });
});
