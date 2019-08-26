import { Injectable } from '@angular/core';
import { VitalSignsIntakeBaseService, IVitalSign } from '../../intake-common';
import { Observable, forkJoin, of } from 'rxjs';
import { IObservationRequest, ObservationRequest } from '../../../api/models';
import { ObservationAPIService } from '../../../api/services';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class VitalSignsIntakeService extends VitalSignsIntakeBaseService {
  public postVitals(vitals: IVitalSign[]): Observable<boolean> {
    const observations = this.mapVitals(vitals);
    return forkJoin(
      ...observations.map((o) => this.api.createObservation(o))
    ).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  private mapVitals(vitals: IVitalSign[]): ObservationRequest[] {
    return vitals
      .map((v) => this.mapToFhirObservation(v))
      .map((o) => new ObservationRequest(o));
  }

  private mapToFhirObservation(vital: IVitalSign): IObservationRequest {
    return {
      status: vital.status,
      code: {
        text: 'Vital Sign',
        coding: [{
          code: vital.observationLoinc,
          system: 'http://loinc.org',
          display: 'Vital Sign',
        }
        ],
      },
      subject: {
        reference: 'Patient/' + vital.subjectId
      },
      effectiveDateTime: vital.effective,
      valueQuantity: {
        value: vital.value,
        unit: vital.valueUnitCode.display,
        system: vital.valueUnitCode.system,
        code: vital.valueUnitCode.code,
      }
    };
  }

  constructor(private api: ObservationAPIService) { super(); }
}