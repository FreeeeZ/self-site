import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import NotFoundView from '@/components/pages/not-found/NotFoundView.vue';

describe('NotFoundView component', () => {
  it('NotFoundView must be initialized', () => {
    const wrapper = mount(NotFoundView);

    expect(wrapper.vm).toBeTruthy();
  });
});
