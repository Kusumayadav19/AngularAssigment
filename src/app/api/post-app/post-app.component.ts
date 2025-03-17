import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-app',
  imports: [NgFor, FormsModule],
  templateUrl: './post-app.component.html',
  styleUrl: './post-app.component.css'
})
export class PostAppComponent {
  http = inject(HttpClient);
  carList : any[] = []
  carObj : any = {
      "carId": 0,
      "brand": "",
      "model": "",
      "year": 0,
      "color": "",
      "dailyRate": 0,
      "carImage": "",
      "RegNo": "",
    }

  getAllCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((result:any)=>{
      this.carList = result.data
    })
  }

  saveCar(){
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar",this.carObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Add New User");
        this.getAllCars();
      }else{
        alert(res.message)
      }
    })
  }
}
