import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  public loginForm!: FormGroup;


  // AuthService no ang 20 mudou para Auth, veja export class Auth { e não export class AuthService {
  constructor(private formBuilder: FormBuilder, private authService: Auth, private router: Router) {

  }

  // formbuilder permite agrupar todos os componentes para pode guardar em um form group

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control('')
    });
  }

  login(): void {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    

    let auth: boolean = this.authService.login(username, password);

    if (auth == true) {
      this.router.navigateByUrl("/admin");
      
    }
  }

  //2h30min12s

}
