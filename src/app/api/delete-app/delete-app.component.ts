import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { LoadCustomerService } from '../../pages/service/load-customer.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-delete-api',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './delete-app.component.html',
  styleUrls: ['./delete-app.component.css']
})
export class DeleteAppComponent {
  employeeList: any[] = [];
  employeeIdToDelete: number = 0;

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

  async deleteEmployee() {
    try {
      if (!this.employeeIdToDelete) {
        alert("Please enter a valid Employee ID.");
        return;
      }

      const response = await axios.delete(
        `https://projectapi.gerasim.in/api/EmployeeManagement/DeleteEmployee/${this.employeeIdToDelete}`
      );

      if (response.status === 200) {
        alert("Employee deleted successfully!");
        this.getAllEmployee();
      } else {
        alert("Failed to delete employee.");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("An error occurred while deleting the employee.");
    }
  }
}
