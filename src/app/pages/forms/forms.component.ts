import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, NgIf],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  userObj : any = {
    firstName : "",
    lastName : "",
    userName : "",
    city : "",
    state : "Bangalore",
    zipCode : "",
    isTermsAgree : false
  }

  onSave(){
    const formValue = this.userObj;
  }


}
