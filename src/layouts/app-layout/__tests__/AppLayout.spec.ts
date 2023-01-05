import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import AppLayout from '@/layouts/app-layout/index.vue';
import Header from '@/layouts/app-layout/components/header/index.vue';
import Content from '@/layouts/app-layout/components/content/index.vue';
import Footer from '@/layouts/app-layout/components/footer/index.vue';
import ScrollToTopButton from '@/components/ui/buttons/ScrollToTopButton.vue';

describe('AppLayout component', () => {
  it('AppLayout must be initialized', () => {
    const wrapper = shallowMount(AppLayout);

    expect(wrapper.vm).toBeTruthy();
  });

  it('AppLayout must be exist Header component', () => {
    const wrapper = shallowMount(AppLayout);

    expect(wrapper.findComponent(Header)).toBeTruthy();
  });

  it('AppLayout must be exist Content component', () => {
    const wrapper = shallowMount(AppLayout);

    expect(wrapper.findComponent(Content)).toBeTruthy();
  });

  it('AppLayout must be exist Footer component', () => {
    const wrapper = shallowMount(AppLayout);

    expect(wrapper.findComponent(Footer)).toBeTruthy();
  });

  it('AppLayout must be exist ScrollToTopButton component', () => {
    const wrapper = shallowMount(AppLayout);

    expect(wrapper.findComponent(ScrollToTopButton)).toBeTruthy();
  });
});
