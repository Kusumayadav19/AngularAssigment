import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoadCustomerService {

  constructor() { }
  
  async loadCustomers() {
    try {
      const response = await axios.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees");
      return response.data;
    } catch (error) {
      console.error("Error loading Customers:", error);
      return null;
    }
  }
}
