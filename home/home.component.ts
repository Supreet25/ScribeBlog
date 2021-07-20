import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string='SuPReet';
  amount:number=1999.123;
  dateOfBirth=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
