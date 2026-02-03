import { onMounted, ref } from "vue";
import Projects from "@/typescript/models/projects";

export default function useProjects () {
  const projectsLength = ref(0);

  onMounted(() => {
    projectsLength.value = Projects.projectsArr.length;
  });

  return {
    projectsLength
  };
}
