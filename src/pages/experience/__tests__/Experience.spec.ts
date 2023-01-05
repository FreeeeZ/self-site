import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Experience from '@/pages/experience/index.vue';
import ExperienceHero from '@/components/pages/experience/ExperienceHero.vue';
import ExperienceList from '@/components/pages/experience/ExperienceList.vue';

describe('Experience component', () => {
  it('Experience must be initialized', () => {
    const wrapper = shallowMount(Experience);

    expect(wrapper.vm).toBeTruthy();
  });

  it('Experience must be exist ExperienceHero component', () => {
    const wrapper = shallowMount(Experience);

    expect(wrapper.findComponent(ExperienceHero)).toBeTruthy();
  });

  it('Experience must be exist ExperienceList component', () => {
    const wrapper = shallowMount(Experience);

    expect(wrapper.findComponent(ExperienceList)).toBeTruthy();
  });
});
