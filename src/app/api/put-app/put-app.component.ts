import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-app',
  imports: [FormsModule, NgFor],
  templateUrl: './put-app.component.html',
  styleUrl: './put-app.component.css'
})
export class PutAppComponent {
  http = inject(HttpClient);

  userList : any[] = []
  busBooking : any = {
      "userId": 0,
      "userName": "",
      "emailId": "",
      "fullName": "",
      "role": "",
      "createdDate": "",
      "password": "",
      "projectName": "",
      "refreshToken": "",
      "refreshTokenExpiryTime": ""
    }

  getAllUsers(){
    this.http.get("https://projectapi.gerasim.in/api/BusBooking/GetAllUsers").subscribe((result:any)=>{
      this.userList = result.data
    })
  }

  saveUser(){
    this.http.post("https://projectapi.gerasim.in/api/BusBooking/AddNewUser",this.busBooking).subscribe((res:any)=>{
      if(res.result){
        alert("Add New User");
        this.getAllUsers();
      }
    })
  }

  onEdit(data : any){
    this.busBooking = data;
  }

}
