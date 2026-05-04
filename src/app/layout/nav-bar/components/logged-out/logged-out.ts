import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../core/services/auth-service';

@Component({
  selector: 'app-logged-out',
  imports: [],
  templateUrl: './logged-out.html',
  styleUrl: './logged-out.css',
})
export class LoggedOut {
  authService = inject(AuthService);
}
