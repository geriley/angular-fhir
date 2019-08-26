import { Injectable } from '@angular/core';
import { FhirHttpClient } from '../../../common';
import { ObservationRequest } from '../models';

@Injectable()
export class ObservationAPIService {
  public createObservation(observation: ObservationRequest) {
    return this.fhirService.create('Observation', observation);
  }

  constructor(private fhirService: FhirHttpClient) { }
}