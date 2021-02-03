import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'HTTP Service';
  jock:any;
  value:any
  constructor(private TestService: TestService) { }

  ngOnInit(){
   
  }

  callService():void{
      this.TestService.getData().subscribe((data)=>{
      console.log(data);
      this.jock = data;
      this.value=this.jock.value;
    });
  }




}