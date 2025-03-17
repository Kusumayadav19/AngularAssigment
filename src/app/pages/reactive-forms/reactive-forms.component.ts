import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  userForm : FormGroup = new FormGroup({
    fName : new FormControl("",[Validators.required]),
    lName : new FormControl("",[Validators.required, Validators.minLength(5)]),
    uName: new FormControl("",[Validators.pattern("kusuma_19")]),
    City : new FormControl(""),
    State: new FormControl("Bangalore"),
    ZipCode: new FormControl(""),
    IsTermsAgree : new FormControl("false"),
  })

  constructor(){
    this.userForm.controls['State'].disable();
    setTimeout(()=>{
      this.userForm.controls['State'].enable();
    },5000);
  }
  onUserSave(){
    const formValue = this.userForm.value;
  }
}
