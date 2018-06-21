export interface ActivityTotals {
  day: Activity;
  week: Activity;
  month: Activity;
}
export interface Activity {
  commits: number;
  discussion: number;
  stars: number;
}
