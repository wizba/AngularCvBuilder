/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HtmlToPdfService } from './HtmlToPdf.service';

describe('Service: HtmlToPdf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlToPdfService]
    });
  });

  it('should ...', inject([HtmlToPdfService], (service: HtmlToPdfService) => {
    expect(service).toBeTruthy();
  }));
});
