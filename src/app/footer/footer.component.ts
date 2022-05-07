import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  memberData = [
    { name: 'Vijay', email: 'vijay977@gmail.com' },
    { name: 'kumar', email: 'kumar7@gmail.com' },
    { name: 'Vijaykumar', email: 'vk@gmail.com' },
    { name: 'Kiran', email: 'kiran@gmail.com' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
