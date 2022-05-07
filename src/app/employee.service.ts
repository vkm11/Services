import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return[
      {"id": 1, "name": "Vijaykumar", "age": 24},
      {"id": 2, "name": "Prajwal", "age": 24},
      {"id": 3, "name": "Gokul", "age": 29},
      {"id": 4, "name": "Shreesha", "age": 35},

    ];
  }

}
