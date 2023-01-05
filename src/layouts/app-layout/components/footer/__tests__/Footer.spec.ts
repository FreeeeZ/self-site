import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Footer from '@/layouts/app-layout/components/footer/index.vue';
import Navigation from '@/layouts/app-layout/components/navigation/Navigation.vue';
import Copyright from '@/layouts/app-layout/components/footer/components/Copyright.vue';
import SocialList from '@/layouts/app-layout/components/footer/components/SocialList.vue';

describe('Footer component', () => {
  it('Footer must be initialized', () => {
    const wrapper = shallowMount(Footer);

    expect(wrapper.vm).toBeTruthy();
  });

  it('Footer must be exist SocialList component', () => {
    const wrapper = shallowMount(Footer);

    expect(wrapper.findComponent(SocialList)).toBeTruthy();
  });

  it('Footer must be exist Navigation component', () => {
    const wrapper = shallowMount(Footer);

    expect(wrapper.findComponent(Navigation)).toBeTruthy();
  });

  it('Footer must be exist Copyright component', () => {
    const wrapper = shallowMount(Footer);

    expect(wrapper.findComponent(Copyright)).toBeTruthy();
  });
});
