import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../core/services/auth-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-logged-out',
  imports: [
    RouterLink
  ],
  templateUrl: './logged-out.html',
  styleUrl: './logged-out.css',
})
export class LoggedOut {
  authService = inject(AuthService);
}
