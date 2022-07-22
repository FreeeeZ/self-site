<template>
  <div class="projects-block">
    <div class="container">
      <h2 class="projects-block__title">Projects</h2>
      <div class="projects-block__list">
        <div class="projects-block__list-item" v-for="(project, index) in type === 'home-page' ? projectsList.slice(0, 2) : projectsList" :key="index">
<!--          <picture class="list-item__picture">-->
<!--            <source type="image/webp" :srcset="project.image">-->
<!--            <img :src="project.image" alt="Main photo">-->
<!--          </picture>-->
          <div class="list-item__info">

            <h2 class="list-item__info-title">
              <a rel="noopener noreferrer nofollow"
                 :href="project.html_url"
                 target="_blank"
              >
                {{project.name}}
              </a>
            </h2>
            <div class="list-item__info-tags">
              <div class="list-item__info-tags-item" v-for="(tag, index) in Object.keys(project.tags)" :key="index">
                {{tag}}
              </div>
            </div>
            <p class="list-item__info-description">
              {{project.description}}
            </p>
          </div>
        </div>
      </div>
      <div class="projects-block__bottom" v-if="props.type === 'home-page'">
        <router-link to="/projects" class="button button-primary">
          SEE ALL PROJECTS
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import axios from "axios";

const props = defineProps({
  type: { type: String, required: true }
})

interface Owner {
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
  owner: Owner;
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

let projectsList: Array<ProjectsObject> = reactive([])

const getProjects = async () => {
  await axios.get('https://api.github.com/users/FreeeeZ/repos')
    .then(function (response) {
      for (let i = 0; i < response.data.length; i++) {
        projectsList.push(response.data[i]);
        axios.get(`https://api.github.com/repos/FreeeeZ/${response.data[i].name}/languages`)
          .then(function (response) {
            projectsList[i].tags = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    })
    .catch(function (error) {
      console.log(error);
    })
};

onMounted(() => {
  getProjects()
})
</script>

<style lang="scss" scoped>
  @use './styles/projects-block.scss';
</style>