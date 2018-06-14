import { InjectionToken } from '@angular/core';
export const STATS_CLIENT_CONFIG = new InjectionToken<StatsClientConfig>('Stats Client Config')
export interface StatsClientConfig {
  domain: string
}
