import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatsComponent } from './project-stats.component';
import { NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import * as projectJSON from '@testing/mocks/transformed-project.json';
const project = projectJSON as any;

describe('ProjectStatsComponent', () => {
  let component: ProjectStatsComponent;
  let fixture: ComponentFixture<ProjectStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectStatsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.curve).toBeTruthy();
    expect(component.unit).toBe('days');
  });

  it('should set stats from input', () => {
    component.project = project;
    component.ngOnChanges({
      project: new SimpleChange(null, project, true)
    });
    fixture.detectChanges();
    expect(component.stats).toBeTruthy();
  });
});
