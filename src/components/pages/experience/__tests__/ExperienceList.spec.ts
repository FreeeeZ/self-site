import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ExperienceList from '@/components/pages/experience/ExperienceList.vue';

describe('ExperienceList component', () => {
  it('ExperienceList must be initialized', () => {
    const wrapper = mount(ExperienceList);

    expect(wrapper.vm).toBeTruthy();
  });
});
