import axios from 'axios';
import { reactive } from 'vue';
import { IRepoObject } from '@/typescript/interfaces/gitHubRepos';

const API_BASE_URL = import.meta.env.VITE_GITHUB_API_URL;
const USERNAME = 'FreeeeZ';
const IGNORED_REPO = `${USERNAME}/FreeeeZ`;

interface GitHubLanguageResponse {
  [language: string]: number;
}

export class GitHubRepos {
  private _projectsList: Array<IRepoObject> = reactive([]);
  private _projectsFetched: boolean = false;
  private _isLoading: boolean = false;

  public async getProjects(): Promise<void> {
    if (this._isLoading || this._projectsFetched) {
      return;
    }

    this._isLoading = true;

    try {
      const repos = await this.fetchUserRepositories();
      const filteredRepos = repos.filter(repo => repo.full_name !== IGNORED_REPO);

      const enrichedRepos = await Promise.all(
        filteredRepos.map(async repo => ({
          ...repo,
          tags: await this.fetchRepositoryLanguages(repo.name),
        }))
      );

      this._projectsList = enrichedRepos;
      this._projectsFetched = true;
    } catch (error) {
      console.error(error);
    } finally {
      this._isLoading = false;
    }
  }

  private async fetchUserRepositories(): Promise<IRepoObject[]> {
    const response = await axios.get<IRepoObject[]>(
      `${API_BASE_URL}/users/${USERNAME}/repos`
    );

    return response.data;
  }

  private async fetchRepositoryLanguages(repoName: string): Promise<string[] | undefined> {
    try {
      const response = await axios.get<GitHubLanguageResponse>(
        `${API_BASE_URL}/repos/${USERNAME}/${repoName}/languages`
      );

      return Object.keys(response.data);
    } catch (error) {
      console.error(`Failed to fetch languages for ${repoName}:`, error);
    }
  }

  get projectsList () {
    return this._projectsList;
  }
}

export default new GitHubRepos();
