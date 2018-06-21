import { TestBed, inject } from '@angular/core/testing';
import * as projectJSON from '@testing/mocks/project.json';
import * as projectsJSON from '@testing/mocks/projects.json';
import { StatsClientService } from './stats-client.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { STATS_CLIENT_CONFIG } from './config';

const projects = projectJSON as any;
const projectStats = projectsJSON as any;

  describe('StatsClientService', () => {
    let httpTestingController: HttpTestingController;
    const baseUrl = 'https://cncfstats.local';

    function expectGetUrl(url) {
      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('GET');
      return req;
    }

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          StatsClientService,
          {
            provide: STATS_CLIENT_CONFIG,
            useValue: {domain: baseUrl}
          }
        ],
        imports: [HttpClientTestingModule]
      });

      httpTestingController = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
    });

    it('should be created', inject([StatsClientService], (service: StatsClientService) => {
      expect(service).toBeTruthy();
    }));

    it('should get project stats', inject([StatsClientService], (service: StatsClientService) => {
      service.project('all').subscribe(data =>
        expect(data).toEqual(projectStats)
      );
      const req = expectGetUrl(baseUrl + '/jsons/all.json');
      req.flush(projectStats);
    }));

    it('should get projects list', inject([StatsClientService], (service: StatsClientService) => {
      service.projectList().subscribe(data =>
        expect(data).toEqual(projects.projects)
      );
      const req = expectGetUrl(baseUrl + '/jsons/projects.json');
      req.flush(projects);
    }));
  });
