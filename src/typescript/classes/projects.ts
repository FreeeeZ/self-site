import axios from 'axios';
import { reactive } from 'vue';
import { IProjectsObject } from '@/typescript/interfaces/projectsInterfaces'

export class $Projects  {
  private projectsList: Array<IProjectsObject> = reactive([])
  private projectsFetched: boolean = false

  get projectsArr () {
    return this.projectsList
  }

  async getProjects() {
    if (!this.projectsFetched) {
      try {
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
      } catch (e) {
        console.error(e)
      }
    }
  };

  async getProjectTags(project: IProjectsObject) {
    if (!this.projectsFetched) {
      if (project.full_name !== 'FreeeeZ/FreeeeZ') {
        try {
          await axios.get(`https://api.github.com/repos/FreeeeZ/${project.name}/languages`)
            .then((response) => {
              response.data ? project.tags = response.data : project.tags = [];
            })
            .catch(function(error) {
              console.log(error);
            })
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
}

export default new $Projects()
