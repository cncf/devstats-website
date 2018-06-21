import { Project } from '../stats-client/models/Project';
import { TransformedStats } from './TransformedStats';
import { ProjectStats } from '../stats-client/models/ProjectStats';
export interface TransformedProject extends Project {
  stats?: ProjectStats | TransformedStats;
}
