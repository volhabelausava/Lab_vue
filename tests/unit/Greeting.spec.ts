import { shallowMount } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

describe('Greeting.vue', () => {
  it('renders msg when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(Greeting, {
      props: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
