import { ICoding } from '../../../../common';

export enum VitalTypes {
  HeartRate,
  BodyTemperature,
  BodyWeight,
  BPSystolic,
  BPDiastolic,
  BPPanel,
}

export enum IntakeVitalUnits {
  WeightLbs = 'Pounds (lbs)',
  WeightKilograms = 'Kilograms (kg)',
  TemperatureDegF = 'Fahrenheit',
  TemperatureDegC = 'Celsius',
  BPM = 'bpm',
  mmHg = 'mm[Hg]'  
}

const uomSystem = 'http://unitsofmeasure.org';

export const VitalUnitCodings = {
  [IntakeVitalUnits.WeightLbs]: {
    system: uomSystem,
    display: 'lbs',
    code: '[lb_av]'
  } as ICoding,
  [IntakeVitalUnits.WeightKilograms]: {
    system: uomSystem,
    display: 'kg',
    code: 'kg',
  },
  [IntakeVitalUnits.TemperatureDegC]: {
    system: uomSystem,
    display: 'Celsius',
    code: 'Cel',
  } as ICoding,
  [IntakeVitalUnits.TemperatureDegF]: {
    system: uomSystem,
    display: 'Fahrenheit',
    code: '[degF]',
  } as ICoding,
  [IntakeVitalUnits.BPM]: {
    system: uomSystem,
    display: 'beats/min',
    code: '/min'
  } as ICoding,
  [IntakeVitalUnits.mmHg]: {
    system: uomSystem,
    display: 'mmHg',
    code: 'mm[Hg]'
  } as ICoding,
}


export const VitalTypeLOINCMap = {
  [VitalTypes.HeartRate]: '8867-4',
  [VitalTypes.BodyTemperature]: '8310-5',
  [VitalTypes.BodyWeight]: '29463-7',
  [VitalTypes.BPPanel]: '85354-9',
  [VitalTypes.BPSystolic]: '8480-6',
  [VitalTypes.BPDiastolic]: '8462-4',
}

export const VitalTypeDescription = {
  [VitalTypes.HeartRate]: 'Heart Rate',
  [VitalTypes.BodyTemperature]: 'Body Temperature',
  [VitalTypes.BodyWeight]: 'Body Weight',
  [VitalTypes.BPPanel]: 'Blood Pressure Panel',
  [VitalTypes.BPSystolic]: 'Systolic Blood Pressure',
  [VitalTypes.BPDiastolic]: 'Diastolic Blood Pressure',
}

export const VitalTypeUnits = {
  [VitalTypes.HeartRate]: [IntakeVitalUnits.BPM],
  [VitalTypes.BodyTemperature]: [IntakeVitalUnits.TemperatureDegF, IntakeVitalUnits.TemperatureDegC],
  [VitalTypes.BodyWeight]: [IntakeVitalUnits.WeightLbs, IntakeVitalUnits.WeightKilograms],
  [VitalTypes.BPPanel]: [],
  [VitalTypes.BPSystolic]: [IntakeVitalUnits.mmHg],
  [VitalTypes.BPDiastolic]: [IntakeVitalUnits.mmHg],
}



