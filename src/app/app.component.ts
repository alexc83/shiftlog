import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './layout/nav-bar/nav-bar.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  protected readonly title = signal('shiftlog');

  ngOnInit(): void {
    initFlowbite();
  }
}
