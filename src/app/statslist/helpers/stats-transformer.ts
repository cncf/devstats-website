import { CommitGraph } from '../stats-client/models';
import { DateTime } from 'luxon';
import { map } from 'rxjs/operators';
import { ProjectStats } from '../stats-client/models/ProjectStats';
import { TransformedStats } from '../models/TransformedStats';

export interface Series {
  name: string;
  series: { name: any, value: any }[];
}

const unitMap = {
  day: 'hours',
  week: 'days',
  month: 'weeks'
};

export function tupleToSeries(graph: CommitGraph, startDate: DateTime): Series[] {
  return Object.keys(graph).map((c) => {
    const unitData = graph[c];
    const unit = unitMap[c];
    return {
      name: unit,
      series: unitData.map((stat) => {
        return {
          name: startDate.minus({[unit]: stat[0]}).toJSDate(),
          value: stat[1]
        };
      })
    };
  });
}

export const statsTransformer = map((project: ProjectStats): TransformedStats => {
  if (!project) {
    return null;
  }
  return {
    ...project,
    seriesCommits: tupleToSeries(project.commitGraph, DateTime.fromISO(project.timestamp))
  };
});
