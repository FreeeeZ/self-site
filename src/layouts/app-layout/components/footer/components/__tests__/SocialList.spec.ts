import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import SocialList from '@/layouts/app-layout/components/footer/components/SocialList.vue';

describe('SocialList component', () => {
  it('SocialList must be initialized', () => {
    const wrapper = mount(SocialList);

    expect(wrapper.vm).toBeTruthy();
  });
});
