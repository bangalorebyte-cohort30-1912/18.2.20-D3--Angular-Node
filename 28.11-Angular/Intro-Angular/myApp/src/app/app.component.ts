import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jithin';

  constructor(){
    console.log("Name : ",this.name)
    this.changeName('John')
    console.log("Name : ",this.name)
  }

  changeName(name:string):void{
    this.name = name;
  }
}
