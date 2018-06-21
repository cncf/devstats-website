import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StatsListEffects } from './stats-list.effects';
import { StatsClientService } from '../stats-client/stats-client.service';
import { of } from 'rxjs/internal/observable/of';

describe('StatsListService', () => {
  const actions$: Observable<any> = of([]);
  let effects: StatsListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StatsListEffects,
        provideMockActions(() => actions$),
        {
          provide: StatsClientService,
          useValue: {}
        }
      ]
    });

    effects = TestBed.get(StatsListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
