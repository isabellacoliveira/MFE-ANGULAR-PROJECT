import { TestBed } from '@angular/core/testing';

import { SongServiceService } from './song-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('SongServiceService', () => {
  let service: SongServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SongServiceService]
    });
    service = TestBed.inject(SongServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
