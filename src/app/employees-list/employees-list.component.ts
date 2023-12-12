import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
employees:any
constructor(private base:BaseService){
  this.base.getEmployees()
}
}
