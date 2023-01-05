import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import AppToast from '@/components/ui/toasts/AppToast.vue';

describe('AppToast component', () => {
  it('AppToast must be initialized', () => {
    const wrapper = mount(AppToast);

    expect(wrapper.vm).toBeTruthy();
  });
});
