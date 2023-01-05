import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import HomeHero from '@/components/pages/home/HomeHero.vue';

describe('HomeHero component', () => {
  it('HomeHero must be initialized', () => {
    const wrapper = mount(HomeHero);

    expect(wrapper.vm).toBeTruthy();
  });
});
