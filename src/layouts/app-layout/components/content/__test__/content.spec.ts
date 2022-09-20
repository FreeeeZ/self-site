import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Content from '@/layouts/app-layout/components/content/index.vue';

describe('Content', () => {
  it('Content must be initialized', () => {
    const wrapper = mount(Content);
    expect(wrapper.vm).toBeTruthy();
  });
});
