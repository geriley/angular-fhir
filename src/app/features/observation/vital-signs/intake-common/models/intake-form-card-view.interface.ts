
import { IntakeVitalUnits } from '../assets';

export interface IVitalSignsIntakeForm {
  bodyTemperature: number;
  bodyTemperatureUnit: IntakeVitalUnits;
  bodyWeight: number;
  bodyWeightUnit: IntakeVitalUnits;
  diastolicBP: number;
  systolicBP: number;
  pulse: number;
}