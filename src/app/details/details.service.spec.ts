import { TestBed } from '@angular/core/testing';

import { DetailsService } from './details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: DetailsService = TestBed.get(DetailsService);
    expect(service).toBeTruthy();
  });
});
