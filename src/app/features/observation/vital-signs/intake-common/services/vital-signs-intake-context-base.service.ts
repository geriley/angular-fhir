import { Observable } from 'rxjs';

export abstract class VitalSignsIntakeContextBaseService {
  public abstract patientId: Observable<string>;
  public abstract vitalSignId: Observable<string>;
}