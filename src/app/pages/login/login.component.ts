import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    username: "",
    password: ""
  };

  router = inject(Router);

  async onLogin() {
    try {
      const response = await axios.post("https://projectapi.gerasim.in/api/EmployeeManagement/login", this.loginObj);
      
      if (response.data.result) { 
        localStorage.setItem("userLogin", JSON.stringify(response.data.data)); // Store user data in local storage
        this.router.navigateByUrl('dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred while logging in.");
    }
  }
}
