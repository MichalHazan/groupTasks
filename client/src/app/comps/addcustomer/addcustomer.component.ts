import { Component, OnInit } from '@angular/core';
import Customer from 'src/app/models/customer.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {

  form ={name: "",
  job: "",
  phone: "",
  mail: ""}
  constructor(public _data: DataService) { }

  ngOnInit(): void {
  }

}
