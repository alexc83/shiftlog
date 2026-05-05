import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-logged-in',
  imports: [
    RouterLink
  ],
  templateUrl: './logged-in.component.html',
  styleUrl: './logged-in.component.css',
})
export class LoggedInComponent {

  authService = inject(AuthService);
}
