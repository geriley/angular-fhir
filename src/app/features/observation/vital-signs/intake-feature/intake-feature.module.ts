import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitalSignsIntakeFeatureBaseService, VitalSignsIntakeBaseService, VitalSignsIntakeCommonModule, VitalSignsIntakeContextBaseService } from '../intake-common';
import { VitalSignsIntakeFeatureService, VitalSignsIntakeService, VitalSignsIntakeContextService } from './services';
import { ObservationAPIModule } from '../../api';

@NgModule({
  imports: [
    CommonModule,
    VitalSignsIntakeCommonModule,
    ObservationAPIModule,
  ],
  exports: [
    VitalSignsIntakeCommonModule,
  ],
  providers: [
    { provide: VitalSignsIntakeFeatureBaseService, useClass: VitalSignsIntakeFeatureService },
    { provide: VitalSignsIntakeBaseService, useClass: VitalSignsIntakeService },
    { provide: VitalSignsIntakeContextBaseService, useClass: VitalSignsIntakeContextService },
  ],
})
export class VitalSignsIntakeFeatureModule { }