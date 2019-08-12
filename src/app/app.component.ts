import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 data={
   title:"Well come to my irst-course of angular"
 };
  onkeyup(newTitle: string){
    this.data.title = newTitle;
  }
  onImageHover(){
   // alert("hello dear!");
  }
}
