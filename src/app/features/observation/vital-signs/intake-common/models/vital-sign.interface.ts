import { ICoding } from '../../../../common';

export interface IVitalSign {
  observationLoinc: string;
  effective: Date;
  status: string;
  subjectId: string;
  value: number | string;
  valueUnitCode: ICoding,
}