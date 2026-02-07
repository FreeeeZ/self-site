import { onMounted, ref } from 'vue';

import GitHubRepos from '@/typescript/models/gitHubRepos';

export default function useProjects() {
  const projectsLength = ref(0);

  onMounted(() => {
    projectsLength.value = GitHubRepos.projectsList.length;
  });

  return {
    projectsLength,
  };
}
