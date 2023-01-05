import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ExperienceHero from '@/components/pages/experience/ExperienceHero.vue';

describe('ExperienceHero component', () => {
  it('ExperienceHero must be initialized', () => {
    const wrapper = mount(ExperienceHero);

    expect(wrapper.vm).toBeTruthy();
  });

  it('ExperienceHero -> Title must be equal correct text', () => {
    const wrapper = mount(ExperienceHero);

    expect(wrapper.find('.experience-hero__title').text()).toBe('Experience');
  });
});
