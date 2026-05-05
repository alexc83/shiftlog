import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Shift} from '../../models/shift.model';
import {AuthService} from '../../../../core/services/auth.service';
import {Unit} from '../../types/unit.enum';
import {ShiftType} from '../../types/shift-type.enum';
import {serverTimestamp} from '@angular/fire/firestore';
import {ShiftDataService} from '../../data-access/shift-data.service';

@Component({
  selector: 'app-create-shift-component',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './create-shift-component.html',
  styleUrl: './create-shift-component.css',
})
export class CreateShiftComponent implements OnInit {

  route = inject(ActivatedRoute);
  router = inject(Router)
  authService = inject(AuthService);
  dataService = inject(ShiftDataService);

  shiftTypes = Object.values(ShiftType);
  units = Object.values(Unit);

  editId: string | null = null;
  editMode = signal(false);


  ngOnInit(): void {
    this.editId = this.route.snapshot.paramMap.get('id');

    if (this.editId) {
      // flip edit mode to true
      this.editMode.set(true);

      // get data from DB
      this.dataService.getShiftById(this.editId).then(shift => {
        if (shift) {
          this.createShiftForm.patchValue(shift);
        }
      })
    }
  }

  createShiftForm = new FormGroup({
    date: new FormControl("", Validators.required),
    unit: new FormControl("", Validators.required),
    shiftType: new FormControl("", Validators.required),
    notes: new FormControl("", Validators.maxLength(30)),
  })

  async onSubmit() {
    // log shift data
    console.log(this.createShiftForm.value);

    // create new shift
    const shift = this.createNewShiftObject();
    let savedShift = null;

    if (this.editMode()) {
      if (this.editId === null) {
        throw new Error('Shift id is not defined');
      }
      savedShift = await this.dataService.updateShift(this.editId, shift);
    } else {
      // save new shift to the DB
      savedShift = await this.dataService.createShift(shift);
    }
    // navigate back to the dashboard
    this.router.navigate( ['/dashboard']);

    // reset the form
    this.createShiftForm.reset();
  }

  createNewShiftObject(): Shift {
    const formData = this.createShiftForm.value;

    if (!formData.date || !formData.unit || !formData.shiftType) {
      throw new Error('Missing required field');
    }

    return {
      userId: this.authService.currentUserId,
      date: formData.date,
      unit: formData.unit as Unit,
      shiftType: formData.shiftType as ShiftType,
      notes: formData.notes,
      createdAt: serverTimestamp(),
    };
  }
}
