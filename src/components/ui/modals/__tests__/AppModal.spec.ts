import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import AppModal from '@/components/ui/modals/AppModal.vue';

describe('AppModal component', () => {
  it('AppModal must be initialized', () => {
    const wrapper = mount(AppModal);

    expect(wrapper.vm).toBeTruthy();
  });
});
