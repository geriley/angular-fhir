import { IVitalSignsIntakeForm } from '../models';
import { Observable } from 'rxjs';

export abstract class VitalSignsIntakeFeatureBaseService {
  public abstract saveForm(intakeForm: IVitalSignsIntakeForm): Observable<boolean>;
}

