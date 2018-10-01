import { TestBed } from '@angular/core/testing';

import { FileReaderServiceService } from './file-reader-service.service';

describe('FileReaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileReaderServiceService = TestBed.get(FileReaderServiceService);
    expect(service).toBeTruthy();
  });
});
