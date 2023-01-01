import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Copyright from '@/layouts/app-layout/components/footer/components/Copyright.vue';

describe('Copyright component', () => {
  it('Copyright must be initialized', () => {
    const wrapper = mount(Copyright);

    expect(wrapper.vm).toBeTruthy();
  });

  it('Current year must be this year', () => {
    const wrapper = mount(Copyright);
    const localCurrentYear = new Date().getFullYear();

    expect(wrapper.vm.currentYear).toEqual(localCurrentYear.toString());
  });
});
