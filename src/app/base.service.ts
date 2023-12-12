import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { 
    this.loadEmployees()
  }

  addEmployee(body:any){
    this.http.post(this.url, body).subscribe(
      () => this.loadEmployees()
    )
  }


updateEmployee(body:any){
  this.http.put(this.url+body).subscribe(
    () => this.loadEmployees()
  )
}


deleteEmployee(body:any){
  this.http.delete(this.url+body).subscribe(
    () => this.loadEmployees()
  )
}

}