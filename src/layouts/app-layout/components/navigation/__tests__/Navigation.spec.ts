import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Navigation from '@/layouts/app-layout/components/navigation/Navigation.vue';

describe('Navigation component', () => {
  it('Navigation must be initialized', () => {
    const wrapper = mount(Navigation);

    expect(wrapper.vm).toBeTruthy();
  });
});
