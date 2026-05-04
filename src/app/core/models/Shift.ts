import {Unit} from '../enums/Unit';
import {ShiftType} from '../enums/ShiftType';
import {Timestamp} from 'rxjs';

export interface Shift {
  id: number;
  userId: number;
  date: string;
  unit: Unit;
  shiftType: ShiftType;
  notes: string;
  createdAt: Timestamp<number>;
}
