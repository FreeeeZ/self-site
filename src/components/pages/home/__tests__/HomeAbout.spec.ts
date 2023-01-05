import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import HomeAbout from '@/components/pages/home/HomeAbout.vue';

describe('HomeAbout component', () => {
  it('HomeAbout must be initialized', () => {
    const wrapper = mount(HomeAbout);

    expect(wrapper.vm).toBeTruthy();
  });
});
