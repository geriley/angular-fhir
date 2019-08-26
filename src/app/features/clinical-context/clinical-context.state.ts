export interface IPatientContext {
  id: string;
}

export interface IClinicalContextState {
  patient: IPatientContext;
}

export const defaultState: IClinicalContextState = {
  patient: {
    id: '004b7f3b-eaaa-4eda-81dc-3a82854a363d',
  },
};
