import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    
  }
verification(){
  console.log("verification is done")
}
signIn(){
  console.log("Here to sign In")
}
}
