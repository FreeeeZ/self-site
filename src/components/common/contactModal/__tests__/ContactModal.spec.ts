import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ContactModal from '@/components/common/contactModal/ContactModal.vue';

describe('ContactModal component', () => {
  it('ContactModal must be initialized', () => {
    const wrapper = mount(ContactModal);

    expect(wrapper.vm).toBeTruthy();
  });
});
