import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus = Boolean();
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn() {
    this.authService.signIn()
      .then(() => {
        this.route.navigate(['appareils']);
        this.authStatus = this.authService.isAuth;
      });
    }
    onSignOut() {
    this.route.navigate(['appareils']);
    this.authService.signOut()
    this.authStatus = this.authService.isAuth;
  }
}
