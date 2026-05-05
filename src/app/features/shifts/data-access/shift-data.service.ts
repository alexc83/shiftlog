import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore, getDoc,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { Shift } from '../models/shift.model';

@Injectable({
  providedIn: 'root',
})
export class ShiftDataService {
  private authService = inject(AuthService);
  private firestore = inject(Firestore);
  private collectionName = 'shifts';

  async createShift(shift: Shift) {
    const userId = this.authService.currentUserId;
    if (!userId) {
      throw new Error('User must be logged into create a shift');
    }

    shift.userId = userId;

    const shiftCollection = collection(this.firestore, this.collectionName);
    return addDoc(shiftCollection, shift);
  }

  getShifts(): Observable<Shift[]> {
    return this.authService.user$.pipe(
      switchMap((user) => {
        if (user) {
          const shiftCollection = collection(this.firestore, this.collectionName);
          const shiftsByUser = query(shiftCollection, where('userId', '==', user.uid));
          return collectionData(shiftsByUser, { idField: 'id' }) as Observable<Shift[]>;
        }

        return of([]);
      }),
    );
  }

  async getShiftById(id: string) {
    const shiftDoc = doc(this.firestore, this.collectionName, id);
    const snapshot = await getDoc(shiftDoc);
    return snapshot.data() as Shift | undefined;
  }

  async updateShift(id: string, shiftData: Partial<Shift>) {
    const shiftDoc = doc(this.firestore, this.collectionName, id);
    return updateDoc(shiftDoc, shiftData);
  }

  async deleteShift(id: string) {
    const shiftDoc = doc(this.firestore, this.collectionName, id);
    return deleteDoc(shiftDoc);
  }
}
