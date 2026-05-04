import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../core/services/auth-service';

@Component({
  selector: 'app-logged-in',
  imports: [],
  templateUrl: './logged-in.html',
  styleUrl: './logged-in.css',
})
export class LoggedIn {

  authService = inject(AuthService);
}
