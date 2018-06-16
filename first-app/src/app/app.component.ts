import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nikhil';
  currentTime = Date();

  onClearClick(){
    this.title='';
  }

  constructor(){
    setInterval(()=>{
      this.currentTime = Date();
    })
  }
}
