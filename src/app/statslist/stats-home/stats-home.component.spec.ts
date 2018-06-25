import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsHomeComponent } from './stats-home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../state/stats-list.reducer';
import { StatsService } from '../state/stats.service';
import * as projectsJSON from '@testing/mocks/projects.json';
import * as fromProjects from '../state';
const projects = projectsJSON as any;
import createSpyObj = jasmine.createSpyObj;
import { By } from '@angular/platform-browser';
import { ProjectStatsComponent } from '../project-stats/project-stats.component';

describe('StatsHomeComponent', () => {
  let component: StatsHomeComponent;
  let fixture: ComponentFixture<StatsHomeComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          'statsList': reducer
        }, {
          initialState: {
            'statsList': projects
          }
        }),
      ],
      declarations: [StatsHomeComponent],
      providers: [StatsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list of projects', () => {
    const list = fixture.debugElement.queryAll(By.css('project-stats'));
    expect(list.length).toBe(projects.projects.length);
  });

  it('should navigate to project on click', () => {
    const list = fixture.debugElement.queryAll(By.css('project-stats'));
    const proj = list[0];
    const action = new fromProjects.ShowProject(projects.projects[0].name);
    proj.triggerEventHandler('click', {});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('should navigate to project on click', () => {
    const list = fixture.debugElement.queryAll(By.css('project-stats'));
    const proj = list[0];
    component.shown = projects.projects[0].name;
    fixture.detectChanges();
    expect(proj.properties.open).toBeTruthy();
  });
});
