import { Timestamp, FieldValue } from '@angular/fire/firestore';
import { ShiftType } from '../types/shift-type.enum';
import { Unit } from '../types/unit.enum';

export interface Shift {
  id?: string;
  userId?: string;
  date: string;
  unit: Unit;
  shiftType: ShiftType;
  notes?: string | null;
  createdAt: Timestamp | FieldValue;
}
