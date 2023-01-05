import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from 'vitest';

import Header from '@/layouts/app-layout/components/header/index.vue';
import Navigation from '@/layouts/app-layout/components/navigation/Navigation.vue';
import MiscInfo from '@/layouts/app-layout/components/header/components/MiscInfo.vue';
import NavigationMobile from "@/layouts/app-layout/components/navigation/NavigationMobile.vue";

describe('Header component', () => {
  it('Header must be initialized', () => {
    const wrapper = mount(Header);

    expect(wrapper.vm).toBeTruthy();
  });

  it('Header must be exist Navigation component', () => {
    const wrapper = shallowMount(Header);

    expect(wrapper.findComponent(Navigation)).toBeTruthy();
  });

  it('Header must be exist NavigationMobile component', () => {
    const wrapper = shallowMount(Header);

    expect(wrapper.findComponent(NavigationMobile)).toBeTruthy();
  });

  it('Header must be exist MiscInfo component', () => {
    const wrapper = shallowMount(Header);

    expect(wrapper.findComponent(MiscInfo)).toBeTruthy();
  });
});
