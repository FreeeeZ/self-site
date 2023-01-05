import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import NotFound from '@/pages/not-found/index.vue';
import NotFoundView from "@/components/pages/not-found/NotFoundView.vue";

describe('NotFound component', () => {
  it('NotFound must be initialized', () => {
    const wrapper = shallowMount(NotFound);

    expect(wrapper.vm).toBeTruthy();
  });

  it('NotFound must be exist NotFoundView component', () => {
    const wrapper = shallowMount(NotFound);

    expect(wrapper.findComponent(NotFoundView)).toBeTruthy();
  });
});
