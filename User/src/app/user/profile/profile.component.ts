import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  value: any;

  constructor(private UserService:  UserService) { }

  ngOnInit(): void {
    this.UserService.getProfile().subscribe((data:any)=>{
      console.log(data);
      this.value=data;
     
  });
    }
}
