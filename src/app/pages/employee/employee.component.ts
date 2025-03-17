import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports:[NgFor],
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    http = inject(HttpClient);
    parentDept: any[] = [];

    constructor() {}

    ngOnInit() {
      this.getParent();
    }

    getParent() {
      this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment")
        .subscribe((result: any) => {
          if (result && result.data) {
            this.parentDept = result.data;
          }
        });
    }
}
