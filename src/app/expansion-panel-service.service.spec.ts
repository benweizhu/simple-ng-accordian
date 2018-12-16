import { TestBed } from '@angular/core/testing';

import { ExpansionPanelServiceService } from './expansion-panel-service.service';

describe('ExpansionPanelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpansionPanelServiceService = TestBed.get(ExpansionPanelServiceService);
    expect(service).toBeTruthy();
  });
});
