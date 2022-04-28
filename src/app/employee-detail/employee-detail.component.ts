import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <ul *ngFor="let employee of employee">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employee =[
    {"id": 1, "name": "Vijaykumar", "age": 24},
    {"id": 2, "name": "Prajwal", "age": 24},
    {"id": 3, "name": "Gokul", "age": 29},
    {"id": 4, "name": "Shreesha", "age": 35},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
