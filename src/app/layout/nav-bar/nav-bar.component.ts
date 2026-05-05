import {Component, inject, signal} from '@angular/core';
import {LoggedInComponent} from './components/logged-in/logged-in.component';
import {AuthService} from '../../core/services/auth.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav-bar',
  imports: [
    LoggedInComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  authService = inject(AuthService);

  loggedIn = toSignal(this.authService.user$);

}
