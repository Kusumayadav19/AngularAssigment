import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { LoadCustomerService } from '../../pages/service/load-customer.service';

@Component({
  selector: 'app-post-app',
  standalone: true,
  imports: [FormsModule, DatePipe, NgFor],
  templateUrl: './post-app.component.html',
  styleUrls: ['./post-app.component.css']
})

export class PostAppComponent {
  employeeList: any[] = [];
  employeeObj: any = {
    employeeId: 0,
    employeeName: "",
    contactNo: "",
    emailId: "",
    deptId: 0,
    password: "",
    gender: "",
    role: "",
    createdDate: new Date().toISOString()
  };

  constructor(private loadCustomerService: LoadCustomerService) {
    this.getAllEmployee();
  }

  async getAllEmployee() {
    try {
      const response = await this.loadCustomerService.loadCustomers();
      this.employeeList = response || [];
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }

  async saveEmployee() {
    try {
      const response = await axios.post("https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee", this.employeeObj);
      
      if (response.data.result) {
        alert("Employee added successfully!");
        await this.getAllEmployee();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Failed to add employee.");
    }
  }
}
