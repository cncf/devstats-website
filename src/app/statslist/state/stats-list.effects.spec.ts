import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StatsListEffects } from './stats-list.effects';
import { StatsClientService } from '../stats-client/stats-client.service';
import { of } from 'rxjs/internal/observable/of';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('StatsListService', () => {
  const actions$: Observable<any> = of([]);
  let effects: StatsListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
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
