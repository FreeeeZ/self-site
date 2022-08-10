import axios from 'axios';
import { reactive } from 'vue';
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
          response.data.map(async (item: ProjectsObject, index: number, response: Array<ProjectsObject>) => {
            if (item.full_name !== 'FreeeeZ/FreeeeZ') {
              this.projectsList.push(item);
              await this.getProjectTags(item)

              if (index + 1 === response.length) {
                this.projectsFetched = true
              }
            }
          })
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
