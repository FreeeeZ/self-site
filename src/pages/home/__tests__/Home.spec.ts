import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Home from '@/pages/home/index.vue';
import HomeHero from '@/components/pages/home/HomeHero.vue';
import HomeAbout from '@/components/pages/home/HomeAbout.vue';
import HomeSkills from '@/components/pages/home/HomeSkills.vue';
import ProjectsList from '@/components/common/projectsList/ProjectsList.vue';

describe('Home component', () => {
  it('Home must be initialized', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.vm).toBeTruthy();
  });

  it('Home must be exist HomeHero component', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.findComponent(HomeHero)).toBeTruthy();
  });

  it('Home must be exist HomeAbout component', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.findComponent(HomeAbout)).toBeTruthy();
  });

  it('Home must be exist HomeSkills component', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.findComponent(HomeSkills)).toBeTruthy();
  });

  it('Home must be exist ProjectsList component', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.findComponent(ProjectsList)).toBeTruthy();
  });
});
