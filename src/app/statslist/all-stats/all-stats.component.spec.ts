import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatsComponent } from './all-stats.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AllStatsComponent', () => {
  let component: AllStatsComponent;
  let fixture: ComponentFixture<AllStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStatsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
