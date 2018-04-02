import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic Form - Angular';
  EmailId : string[];
  Visibility : string;

  constructor(){
    this.Visibility="none";
  }

  onsubmit(FormEMailID): void {
    console.log('you submitted value:', FormEMailID);  
    this.EmailId = FormEMailID;
    this.Visibility = "block";

  }
}

