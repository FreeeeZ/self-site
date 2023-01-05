import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import IconWrapper from '@/components/icons/IconWrapper.vue';

describe('IconWrapper component', () => {
  it('IconWrapper must be initialized', () => {
    const wrapper = mount(IconWrapper);

    expect(wrapper.vm).toBeTruthy();
  });
});
