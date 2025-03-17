import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-app',
  imports: [NgFor],
  templateUrl: './get-app.component.html',
  styleUrl: './get-app.component.css'
})
export class GetAppComponent {
  userList : any[] = [];
  productList : any[] = [];
  constructor(private http : HttpClient){

  }

  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList = res;
    })
  }

  getProducts(){
    this.http.get("https://fake-store-api.mock.beeceptor.com/api/products").subscribe((result:any)=>{
      this.productList = result;
    })
  }
}
