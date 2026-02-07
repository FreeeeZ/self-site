import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ScrollToTopButton from '@/components/ui/buttons/ScrollToTopButton.vue';

describe('ScrollToTopButton component', () => {
  it('ScrollToTopButton must be initialized', () => {
    const wrapper = mount(ScrollToTopButton, {
      props: {
        isShowButton: true,
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
