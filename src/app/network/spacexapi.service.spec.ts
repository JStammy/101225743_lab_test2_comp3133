import { TestBed } from '@angular/core/testing';
import { SpacexService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: SpacexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexService);
  });

  it('create', () => {
    expect(service).toBeTruthy();
  });
});
