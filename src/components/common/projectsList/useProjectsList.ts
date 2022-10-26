import { onMounted, ref } from "vue";

import EX_$Projects from "@/typescript/models/projects";
import { IProjectObject } from "@/typescript/interfaces/projectsInterfaces";

export default function useProjectsList () {
  const projectsArr = ref([] as Array<IProjectObject>);

  async function fetchProjects () {
    try {
      await EX_$Projects?.getProjects();
      projectsArr.value = EX_$Projects.projectsArr;
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
