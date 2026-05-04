import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../core/services/auth-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-logged-in',
  imports: [
    RouterLink
  ],
  templateUrl: './logged-in.html',
  styleUrl: './logged-in.css',
})
export class LoggedIn {

  authService = inject(AuthService);
}
