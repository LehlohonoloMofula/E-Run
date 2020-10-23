import { TestBed } from '@angular/core/testing';

import { ErrandsService } from './errands.service';

describe('ErrandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrandsService = TestBed.get(ErrandsService);
    expect(service).toBeTruthy();
  });
});
