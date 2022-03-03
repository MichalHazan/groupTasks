import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Task', 'Date', 'Customer', 'Action'];

  constructor(public _data: DataService) { }

  ngOnInit(): void {
    this._data.getTasks()
  }



}
