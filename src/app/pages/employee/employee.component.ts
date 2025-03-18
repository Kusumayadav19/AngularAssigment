import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LoadCustomerService } from '../service/load-customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor, FormsModule, DatePipe],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employeeList: any[] = [];
  

  constructor(private loadCustomerService: LoadCustomerService) {
    this.getAllEmployee();
  }

  async getAllEmployee() {
    this.employeeList = await this.loadCustomerService.loadCustomers();
  }

}
