import {reactive} from 'vue';
import axios from 'axios';

interface UserInfo {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface ProjectsObject {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: UserInfo;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license?: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  tags: string[]
}

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
