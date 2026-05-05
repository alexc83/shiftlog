import { Component, inject, OnInit } from '@angular/core';
import { ShiftDataService } from '../shifts/data-access/shift-data.service';
import {Router, RouterLink} from '@angular/router';
import {AsyncPipe, DatePipe} from '@angular/common';
import {initFlowbite, Modal} from 'flowbite';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, AsyncPipe, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit{
  private modal: Modal | undefined;

  ngOnInit(): void {
      initFlowbite();
      const $modalElement = document.getElementById('delete-modal');
      if ($modalElement) {
        this.modal = new Modal($modalElement, {
          backdrop: 'dynamic',
          closable: true,
        });
      }
  }

  router = inject(Router);
  dataService = inject(ShiftDataService);

  shifts$ = this.dataService.getShifts();

  idToDelete: string | null = null;

  handleEdit(id: string | undefined) {
    this.router.navigate(['/edit-shift', id]);
  }

  prepareDelete(id: string | undefined) {
    if (id) {
      this.idToDelete = id;
      this.modal?.show();
    }
  }

  async confirmDelete() {
    if (this.idToDelete) {
      await this.dataService.deleteShift(this.idToDelete);
      this.idToDelete = null;
      this.modal?.hide();
    }
  }

  closeModal() {
    this.modal?.hide();
  }
}
