import { createSelector } from '@ngrx/store';
import { IClinicalContextState } from './clinical-context.state';

export const selectContext = (state) => state.clinicalContext;

export const patientId = createSelector(
  selectContext,
  (state: IClinicalContextState) => state.patient.id
);