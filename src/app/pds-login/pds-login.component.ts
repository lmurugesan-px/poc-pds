import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pds-login',
  templateUrl: './pds-login.component.html',
  styleUrls: ['./pds-login.component.sass'],
})
export class PdsLoginComponent {
  login: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.login = this.fb.group({
      uname: this.fb.control('pds-admin', [Validators.required]),
      password: this.fb.control('pds-password', [Validators.required]),
    });
  }

  public onSubmit(): void {
    this.http.post('http://localhost:3000/login',this.login.value).subscribe((res: any)=>{
      sessionStorage.setItem('token', res.token);
      this.router.navigate(['dashboard']);
    })
  }
}
