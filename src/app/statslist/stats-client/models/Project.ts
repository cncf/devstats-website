import { ProjectStats } from './ProjectStats';
export interface Project {
  dashboardUrl: string;
  dbDumpUrl: string;
  name: string;
  repo: string;
  status: string;
  title: string;
  stats?: ProjectStats;
}
