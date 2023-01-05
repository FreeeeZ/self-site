import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import AppButton from '@/components/ui/buttons/AppButton.vue';

describe('AppButton component', () => {
  it('AppButton must be initialized', () => {
    const wrapper = mount(AppButton, {
      props: {
        buttonType: 'primary'
      }
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
