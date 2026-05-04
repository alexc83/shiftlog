import {Component, inject, signal} from '@angular/core';
import {LoggedIn} from './components/logged-in/logged-in';
import {LoggedOut} from './components/logged-out/logged-out';
import {AuthService} from '../../core/services/auth-service';

@Component({
  selector: 'app-nav-bar',
  imports: [
    LoggedIn,
    LoggedOut
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  authService = inject(AuthService);

}
