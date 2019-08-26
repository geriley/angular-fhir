import { ICoding } from './coding.interface';

export interface ICodeableConcept {
  coding: ICoding[];
  text: string;
}