import {reactive} from 'vue';
import axios from 'axios';
import { ProjectsObject } from '@/typescript/interfaces/projectsInterfaces'

export class $Projects  {
  private projectsList: Array<ProjectsObject> = reactive([])
  private projectsFetched: boolean = false

  get projectsArr () {
    return this.projectsList
  }

  async getProjects() {
    if (!this.projectsFetched) {
      await axios.get('https://api.github.com/users/FreeeeZ/repos')
        .then(async (response) => {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].full_name !== 'FreeeeZ/FreeeeZ') {
              this.projectsList.push(response.data[i]);
              await this.getProjectTags(response.data[i])

              if (i === response.data.length - 1) {
                this.projectsFetched = true
              }
            }
          }
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  };

  async getProjectTags(project: ProjectsObject) {
    if (!this.projectsFetched) {
      if (project.full_name !== 'FreeeeZ/FreeeeZ') {
        await axios.get(`https://api.github.com/repos/FreeeeZ/${project.name}/languages`)
          .then((response) => {
            response.data ? project.tags = response.data : project.tags = [];
          })
          .catch(function(error) {
            console.log(error);
          })
      }
    }
  }
}

export default new $Projects()
