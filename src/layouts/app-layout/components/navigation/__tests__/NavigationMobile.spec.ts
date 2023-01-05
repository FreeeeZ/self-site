import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import NavigationMobile from '@/layouts/app-layout/components/navigation/NavigationMobile.vue';

describe('NavigationMobile component', () => {
  it('NavigationMobile must be initialized', () => {
    const wrapper = mount(NavigationMobile);

    expect(wrapper.vm).toBeTruthy();
  });
});
