import { TestBed, inject } from '@angular/core/testing';

import { StatsService } from './stats.service';
import { StoreModule } from '@ngrx/store';
import { reducer } from './stats-list.reducer';

describe('StatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          'projects': reducer
        })
      ],
      providers: [StatsService]
    });
  });

  it('should be created', inject([StatsService], (service: StatsService) => {
    expect(service).toBeTruthy();
  }));
});
