import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { LoadCustomerService } from '../../pages/service/load-customer.service';

@Component({
  selector: 'app-put-api',
  standalone: true,
  imports: [FormsModule,NgFor, DatePipe],
  templateUrl: './put-app.component.html',
  styleUrls: ['./put-app.component.css']
})
export class PutAppComponent {
  employeeList : any[] = []
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
  async updateEmployee() {
    try {
      if (!this.employeeObj.employeeId) {
        alert("Employee ID is required to update!");
        return;
      }
      const response = await axios.put(
        `https://projectapi.gerasim.in/api/EmployeeManagement/UpdateEmployee/${this.employeeObj.employeeId}`,
        this.employeeObj
      );
      if (response.status === 200) {
        alert("Employee updated successfully!");
      } else {
        alert("Failed to update employee.");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("An error occurred while updating the employee.");
    }
  }
}
