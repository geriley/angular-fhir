import { IVitalSign } from '../models';
import { Observable } from 'rxjs';

export abstract class VitalSignsIntakeBaseService {
  public abstract postVitals(vitals: IVitalSign[]): Observable<boolean>;
}