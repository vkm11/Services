import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employee">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


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
