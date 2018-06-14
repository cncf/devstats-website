import { ActivityTotals } from './ActivityTotals';
import { CommitGraph } from './CommitGraph';

export interface ProjectStats {
  activityTotals: ActivityTotals,
  commitGraph: CommitGraph,
  latestVersion: string,
  openIssues: number,
  recentDiscussion: number,
  stars: number
}
