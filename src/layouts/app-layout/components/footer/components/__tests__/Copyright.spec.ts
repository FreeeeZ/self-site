import { DefineComponent } from "vue";
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Copyright from '@/layouts/app-layout/components/footer/components/Copyright.vue';

describe('Copyright component', () => {
  it('Copyright must be initialized', () => {
    const wrapper = mount(Copyright);

    expect(wrapper.vm).toBeTruthy();
  });

  it('Current year must be correct value', () => {
    const wrapper = mount(Copyright as DefineComponent);
    const localCurrentYear = new Date().getFullYear();

    expect(wrapper.vm.currentYear).toEqual(localCurrentYear.toString());
  });

  it('Copyright must be correct value', () => {
    const wrapper = mount(Copyright as DefineComponent);
    const localCurrentYear = new Date().getFullYear();

    expect(wrapper.find('.main-footer__copyright').text()).toBe(`Vladislav Shell © ${localCurrentYear}`);
  });
});
