import { Injectable } from  '@angular/core';
import { VitalSignsIntakeFeatureBaseService, VitalSignsIntakeBaseService, IVitalSignsIntakeForm, IVitalSign, VitalSignsIntakeContextBaseService, IntakeVitalUnits, VitalUnitCodings, VitalTypeLOINCMap, VitalTypes } from '../../intake-common';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class VitalSignsIntakeFeatureService extends VitalSignsIntakeFeatureBaseService {
    public saveForm(intakeForm: IVitalSignsIntakeForm): Observable<boolean> {
      return this.context.patientId.pipe(
        map((patientId: string) => this.mapToVitalSigns(patientId, intakeForm)),
        switchMap((vitals: IVitalSign[]) => this.intakeService.postVitals(vitals))
      )
    }

    private mapToVitalSigns(patientId: string, intakeForm: IVitalSignsIntakeForm): IVitalSign[] {
      const bodyTempVital = this.convertToVital(patientId, VitalTypeLOINCMap[VitalTypes.BodyTemperature], intakeForm.bodyTemperature, intakeForm.bodyTemperatureUnit);

      const bodyWeight = this.convertToVital(patientId, VitalTypeLOINCMap[VitalTypes.BodyWeight], intakeForm.bodyWeight, intakeForm.bodyWeightUnit);

      const pulse = this.convertToVital(patientId, VitalTypeLOINCMap[VitalTypes.HeartRate], intakeForm.pulse, IntakeVitalUnits.BPM);

      const validVitals = [bodyTempVital, bodyWeight, pulse].filter((i) => i != undefined);

      console.log(validVitals);

      return validVitals;
    }

    private convertToVital(patientId: string, loinc: string, value: number | string, unit: IntakeVitalUnits): IVitalSign {
      const date = new Date();
      if (!value) return undefined;
      return {
        observationLoinc: loinc,
        effective: date,
        status: 'final',
        subjectId: patientId,
        value: value,
        valueUnitCode: VitalUnitCodings[unit],
      }
    }

    constructor(private intakeService: VitalSignsIntakeBaseService, private context: VitalSignsIntakeContextBaseService) { 
      super();
    }
}