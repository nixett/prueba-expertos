import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { dataService } from '../dataservice/data.service'
import { LoginI } from '../modelos/login.interface'
import { ResponseI } from '../modelos/response.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: dataService, private router: Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate([''])
    }
  }


  onLogin(form: LoginI) {
    /* console.log(form) */
    this.api.loginByUser(form).subscribe(data => {
      console.log(data);
      let dataResponse: ResponseI = data;
      /* if (dataResponse.ok == "true") {
        localStorage.setItem("token", dataResponse.headers.access)
        this.router.navigate([''])
      } */
      if (dataResponse.access) {
        localStorage.setItem("token", dataResponse.access)
        this.router.navigate([''])
      }
    })
  }

}
