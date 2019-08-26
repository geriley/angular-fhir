import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { VitalSignsIntakeFormCardComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule,
  ],
  declarations: [
    VitalSignsIntakeFormCardComponent,
  ],
  exports: [
    VitalSignsIntakeFormCardComponent,
  ],
})
export class VitalSignsIntakeCommonModule { }