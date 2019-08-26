import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VitalTypeUnits, VitalTypes } from '../../assets';
import { VitalSignsIntakeFeatureBaseService } from '../../services';

@Component({
  selector: 'obs-vital-intake-form-card',
  templateUrl: './intake-form-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VitalSignsIntakeFormCardComponent implements OnInit {
  public tempUnits = VitalTypeUnits[VitalTypes.BodyTemperature];
  public weightUnits = VitalTypeUnits[VitalTypes.BodyWeight];
  private originalFormState;
  public intakeForm: FormGroup;;

  public ngOnInit() {
    this.intakeForm = new FormGroup({
      bodyTemperature: new FormControl(),
      bodyTemperatureUnit: new FormControl(this.tempUnits[0]),
      bodyWeight: new FormControl(),
      bodyWeightUnit: new FormControl(this.weightUnits[0]),
      systolicBP: new FormControl(),
      diastolicBP: new FormControl(),
      pulse: new FormControl(),
    });
    this.originalFormState = this.intakeForm.value;
  }

  public clearForm() {
    this.intakeForm.reset(this.originalFormState);
  }

  public submitForm() {
    console.log('Saving');
    this.formService.saveForm(this.intakeForm.value).toPromise();
  }

  constructor(private formService: VitalSignsIntakeFeatureBaseService) { }
}