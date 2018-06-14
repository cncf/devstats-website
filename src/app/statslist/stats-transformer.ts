import { CommitGraph } from './stats-client/models';

export interface Series {
  name: string,
  series: {name: any, value: any}[]
}

export function tupleToSeries(graph: CommitGraph): Series[] {
  return Object.keys(graph).map((c) => {
    return {
      name: c,
      series: graph[c].map((stat) => {
        return {
          name: stat[0],
          value: stat[1]
        }
      })
    }
  })
}
