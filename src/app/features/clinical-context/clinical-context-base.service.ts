import { Observable } from 'rxjs';

export abstract class ClinicalContextBaseService {
  public abstract patientId: Observable<string>;
}