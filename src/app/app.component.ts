import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pds';

  constructor(private router:Router) {
    
  }

  @HostListener('window:message', ['$event'])
  onMessage(e: any) {
    console.log(e.data.token);
    if(e.origin !== 'http://localhost:4200') return;
    if(e.data.token) {
      sessionStorage.setItem('token',e.data.token)
      this.router.navigate(['dashboard']);
    }
  }
}
