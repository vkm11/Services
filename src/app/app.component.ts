import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Itwinetech';
  title1 = 'Services in Angular';
  memberData = [
    { name: 'Vijay', email: 'vijay977@gmail.com' },
    { name: 'kumar', email: 'kumar7@gmail.com' },
    { name: 'Vijaykumar', email: 'vk@gmail.com' },
    { name: 'Kiran', email: 'kiran@gmail.com' }
  ]
}
