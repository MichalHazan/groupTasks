import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Customer from '../models/customer.model';
import TaskM from '../models/taskm.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tasksArr: TaskM[];
  baseUrl = 'http://localhost:1000/';
  customersArr: Customer[];

  async getCustomers() {
    const res = await fetch(this.baseUrl + 'customers');
    const data: Customer[] = await res.json();
    console.log(data);
    this.customersArr = data;
  }

  async getTasks() {
    const res = await fetch(this.baseUrl);
    const data: TaskM[] = await res.json();
    console.log(data);
    this.tasksArr = data;
  }

  async addTask(body: { task: string; customer: number }) {
    const res = await fetch(this.baseUrl, {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    if (data.err) {
      alert(data.err);
    }
    if (data.msg) {
      this.getTasks();
    }
  }

  async delTask(id: number) {
    if (confirm('Are You sure you want to delete?')) {
      const res = await fetch(this.baseUrl + id, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.msg) {
        this.getTasks();
      }
    } else {
      console.log('not deleted');
    }
  }
  async UpdateTask(body: { complited: boolean; id: number }) {
    console.log(body);
    const res = await fetch(this.baseUrl + 'complit', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    if (data.err) {
      alert(data.err);
    }
    if (data.msg) {
      this.getTasks();
    }
  }
  async AddCustomer(body: {
    name: string;
    job: string;
    phone: string;
    mail: string;
  }) {
    const res = await fetch(this.baseUrl + 'customers', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    if (data.err) {
      alert(data.err);
    }
    if (data.msg) {
      alert(data.msg)
      this._r.navigateByUrl("")
    }
  }
  constructor(public _r: Router) {}
}
