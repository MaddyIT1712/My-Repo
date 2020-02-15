import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myName : string = "MADHAVI RAJ";

  getStatemant(a, b){
    return a + ' is going to ' + b; 
  }

  isDisable : boolean = false;
  myString : string = "This is working fine";
  myID : string = "myappid";
  isTrue : boolean = true;
  text = {
    "text-red" : this.isTrue,
    "text-blue" : !this.isTrue
  };
}
