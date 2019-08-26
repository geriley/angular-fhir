import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './clinical-context.reducer';
import { ClinicalContextFacade } from './clinical-context.facade';
import { ClinicalContextBaseService } from './clinical-context-base.service';

@NgModule({
  imports: [
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.reducer),
  ],
  providers: [
    { provide: ClinicalContextBaseService, useClass: ClinicalContextFacade }
  ]
})
export class ClinicalContextModule { }