import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf,NgFor,NgClass,NgStyle, UpperCasePipe, JsonPipe, DatePipe } from '@angular/common';
import { ProgressbarComponent } from '../progressbar/progressbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, NgIf, NgFor, NgClass, NgStyle, UpperCasePipe, JsonPipe, DatePipe, ProgressbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  order = "Initial Order"
  // This data is rendering on UI using interpolation
  interpolation = "Your fetching data through interpolation";

  // This data will be binding to the property in the HTML file
  placeHolderText = "Enter Your Favt SuperBike :"

  // This data will bind whenever a event occurs in the User interface
  handleClick(event:Event){
    this.order = "Order Updated";
    console.log("Click Event occured", event)
  }
  // this name will be initially displayed in UI, later once the name 
  // taken from user in the input it will automatically update
  name:string = "Kushhhhhh";


  // Directives - *ngIf, *ngFor, ngClass, ngStyle
  showMessage = true;
  toggleMessage(){
    this.showMessage = !this.showMessage;
  }
  // List of user fetched using ngFor
  users = ["Kushhh","Manu","Harshith","Shivani","Chandana"]

  // Dynamically setting css class property using ngClass
  isActive: boolean = false;
  isHighlighted: boolean = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
  
  // ngStyle allows dynamic styling based on component properties
  textColor = "blue";
  changeColor(){
    this.textColor = this.textColor === "blue" ? "red" : "blue";
  }

  pipeObj : any = {
    name : "kusuma",
    age : 22,
    Address : "Ecity"
  }

  current : Date = new Date();

  greeting ="Welcome To Your TO-DO-LIST";
    yourEventName = "Enter Event Name";
    yourEventTime = "Enter Event Time";
    yourProgress ="Enter Progress Percent";
  
    eventName:string = "";
    eventTime:string = "";
    progressTime:number = 0;
    eventList : {id : number, name : string, time : string, progress :number} [] = [];
  
    addEvent(){
      if(this.eventName.trim() && this.eventTime.trim()){
        this.eventList.push({id : this.eventList.length + 1, name : this.eventName, time : this.eventTime, progress : this.progressTime});
        this.eventName = "";
        this.eventTime = "";
        this.progressTime = 0;
      }
    }
  
    editingId:number | null = null;
    editName:string ="";
    editTime:string="";
    editProgress:number = 0;
  
    editEvent(event:any){
      this.editingId = event.id;
      this.addEvent = event.name;
      this.editTime = event.time;
      this.editProgress = event.progress;
    }
  
    saveEdit(id : number){
      const event = this.eventList.find(event=> event.id === id);
      if(event && this.editName.trim() && this.editTime.trim()){
        event.name = this.editName;
        event.time = this.editTime;
        event.progress = this.editProgress;
        this.editingId = null;
      }
    }
  
    deleteEvent(id:number){
      this.eventList = this.eventList.filter(event => event.id !== id)
  
  }
}
