import { Component, inject, OnInit } from '@angular/core';
import { ShiftDataService } from '../shifts/data-access/shift-data.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit{
  dataService = inject(ShiftDataService);

  ngOnInit(): void {
    console.log(this.dataService.getShifts());
  }

}
