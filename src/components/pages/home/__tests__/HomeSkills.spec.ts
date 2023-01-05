import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import HomeSkills from '@/components/pages/home/HomeSkills.vue';

describe('HomeSkills component', () => {
  it('HomeSkills must be initialized', () => {
    const wrapper = mount(HomeSkills);

    expect(wrapper.vm).toBeTruthy();
  });
});
