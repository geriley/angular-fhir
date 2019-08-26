import { Injectable } from '@angular/core';
import { VitalSignsIntakeContextBaseService } from '../../intake-common';
import { ClinicalContextBaseService } from '../../../../clinical-context';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class VitalSignsIntakeContextService extends VitalSignsIntakeContextBaseService {
  public patientId = this.clinicalContext.patientId;
  public vitalSignId = new BehaviorSubject(undefined);

  constructor(private clinicalContext: ClinicalContextBaseService) {
    super();
  }
}