import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ProjectsList from '@/components/common/projectsList/ProjectsList.vue';

describe('ProjectsList component', () => {
  it('ProjectsList must be initialized', () => {
    const wrapper = mount(ProjectsList, {
      props: {
        countItemsForRender: 10,
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
