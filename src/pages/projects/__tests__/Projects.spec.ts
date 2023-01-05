import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';

import Projects from '@/pages/projects/index.vue';
import ProjectsList from '@/components/common/projectsList/ProjectsList.vue';

describe('Projects component', () => {
  it('Projects must be initialized', () => {
    const wrapper = shallowMount(Projects);

    expect(wrapper.vm).toBeTruthy();
  });

  it('Projects must be exist ProjectsList component', () => {
    const wrapper = shallowMount(Projects);

    expect(wrapper.findComponent(ProjectsList)).toBeTruthy();
  });
});
