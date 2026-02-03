import { onMounted, ref } from "vue";

import GitHubRepos from "@/typescript/models/gitHubRepos";
import { IRepoObject } from "@/typescript/interfaces/gitHubRepos";

export default function useProjectsList () {
  const projectsArr = ref([] as Array<IRepoObject>);

  async function fetchProjects() {
    try {
      await GitHubRepos.getProjects();

      projectsArr.value = GitHubRepos.projectsList;
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(async () => {
    await fetchProjects();
  });

  return {
    projectsArr
  };
}
