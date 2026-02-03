import { onMounted, ref } from "vue";

import Projects from "@/typescript/models/projects";
import { IProjectObject } from "@/typescript/interfaces/projects";

export default function useProjectsList () {
  const projectsArr = ref([] as Array<IProjectObject>);

  async function fetchProjects () {
    try {
      await Projects?.getProjects();
      projectsArr.value = Projects.projectsArr;
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
