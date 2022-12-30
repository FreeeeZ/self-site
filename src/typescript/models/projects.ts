import axios from 'axios';
import { reactive } from 'vue';
import { IProjectObject } from '@/typescript/interfaces/projectsInterfaces';

export class $Projects {
  private projectsList: Array<IProjectObject> = reactive([]);
  private projectsFetched = false;

  get projectsArr () {
    return this.projectsList;
  }

  async getProjects() {
    if (!this.projectsFetched) {
      await axios.get(`${import.meta.env.VITE_GITHUB_API_URL}/users/FreeeeZ/repos`)
        .then(async (response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].full_name !== 'FreeeeZ/FreeeeZ') {
              this.projectsList.push(response.data[i]);
              await this.getProjectTags(response.data[i]);

              if (i === response.data.length - 1) {
                this.projectsFetched = true;
              }
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  async getProjectTags(project: IProjectObject) {
    if (!this.projectsFetched) {
      if (project.full_name !== 'FreeeeZ/FreeeeZ') {
        await axios.get(`${import.meta.env.VITE_GITHUB_API_URL}/repos/FreeeeZ/${project.name}/languages`)
          .then((response) => {
            response.data ? project.tags = response.data : project.tags = [];
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
}

export default new $Projects();
