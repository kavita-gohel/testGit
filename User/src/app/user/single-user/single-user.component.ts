import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  value: any;

  constructor(private UserService:  UserService) { }

  ngOnInit(): void {
    this.UserService.getData().subscribe((data:any)=>{
      console.log(data);
      this.value=data;
    });
  }

}
