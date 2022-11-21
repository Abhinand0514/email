import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emailverification';
  constructor(private router:Router){

  }
  emailverification(){
    this.router.navigate(['email'])
  }

}
