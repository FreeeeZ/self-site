import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import MiscInfo from '@/layouts/app-layout/components/header/components/MiscInfo.vue';

describe('MiscInfo component', () => {
  it('MiscInfo must be initialized', () => {
    const wrapper = mount(MiscInfo);

    expect(wrapper.vm).toBeTruthy();
  });
});
