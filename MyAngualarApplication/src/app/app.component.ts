import { Component } from '@angular/core';
import {Customer} from './app.component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'CustomerApplication';
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }
  Delete(cust){
    this.CustomerModels.splice(cust);
  }

  Edit(cust){
    console.log(cust);
    this.CustomerModel = cust;
  }


}