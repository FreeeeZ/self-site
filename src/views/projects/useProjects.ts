import { onMounted, ref } from "vue";
import EX_$Projects from "@/typescript/models/projects";

export default function useProjects () {
  const projectsLength = ref(0);

  onMounted(() => {
    projectsLength.value = EX_$Projects.projectsArr.length;
  });

  return {
    projectsLength
  };
}
