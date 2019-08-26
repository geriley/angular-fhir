import { createReducer, Action } from '@ngrx/store';
import { defaultState, IClinicalContextState } from './clinical-context.state';

const clinicalContextReducer = createReducer(
  defaultState,
);

export const featureKey = 'clinicalContext';
export function reducer(state: IClinicalContextState, action: Action) {
  return clinicalContextReducer(state, action);
}