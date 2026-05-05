import {Component, inject, signal} from '@angular/core';
import {LoggedIn} from './components/logged-in/logged-in';
import {AuthService} from '../../core/services/auth-service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav-bar',
  imports: [
    LoggedIn
  ],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  authService = inject(AuthService);

  loggedIn = toSignal(this.authService.user$);

}
