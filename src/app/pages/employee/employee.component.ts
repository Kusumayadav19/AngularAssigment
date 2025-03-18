import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LoadCustomerService } from '../service/load-customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  userList: any[] = [];
  

  constructor(private loadUser: LoadCustomerService) {}

  async getCustomer() {
    this.userList = await this.loadUser.loadCustomers() || [];
  }

}
