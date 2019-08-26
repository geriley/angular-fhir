import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IClinicalContextState } from './clinical-context.state';
import * as selectors from './clinical-context.selectors';

@Injectable()
export class ClinicalContextFacade {
  public patientId = this.store.select(selectors.patientId);
  constructor(private store: Store<IClinicalContextState>) { }
}