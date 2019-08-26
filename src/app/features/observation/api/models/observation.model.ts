import { ICodeableConcept, ICoding, IReference, IValueQuantity } from '../../../common';

export interface IObservationRequest {
  status: string;
  code: ICodeableConcept;
  subject: IReference;
  effectiveDateTime: Date;
  valueQuantity: IValueQuantity;
}

export class ObservationRequest implements IObservationRequest {
  public status: string;
  public code: ICodeableConcept;
  public subject: IReference;
  public effectiveDateTime: Date;
  public valueQuantity: IValueQuantity;
  public category: ICodeableConcept = {
    coding: [{
      system: 'http://terminology.hl7.org/CodeSystem/observation-category',
      code: 'vital-signs',
    }] as ICoding[],
    text: 'Vital Signs'
  };
  public resourceType = "Observation";

  constructor(observation: IObservationRequest) {
    this.status = observation.status;
    this.code = observation.code;
    this.subject = observation.subject;
    this.effectiveDateTime = observation.effectiveDateTime;
    this.valueQuantity = observation.valueQuantity;
  }
}