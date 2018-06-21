import { ProjectStats } from '../stats-client/models/ProjectStats';
import { Series } from '../helpers/stats-transformer';
export interface TransformedStats extends ProjectStats {
  seriesCommits: Series[];
}
