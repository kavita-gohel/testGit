import { AppModule } from './../../app.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
    profile: Array<any> =['https://robohash.org/quiasimiliquelaborum.jpg',
  'https://robohash.org/quiaexdolorem.jpg',
  'https://robohash.org/uttotamea.jpg',
  'https://robohash.org/culpalaboreet.jpg',
  'https://robohash.org/voluptasmollitiaautem.jpg',
  'https://robohash.org/eumrationequia.jpg?',
  'https://robohash.org/nonsolutaconsequatur.jpg?',
  'https://robohash.org/enimatsit.jpg?',
  'https://robohash.org/etporroveritatis.jpg?',
  'https://robohash.org/illumunderepudiandae.jpg?'
  ];
  randomItem:any
  constructor() { }

  ngOnInit(): void {
   
    }
    // changeProfile(){
    //  this.randomItem = Math.floor(Math.random()+1);
    //  console.log(this.randomItem);
    //  this.profile=this.profile[this.randomItem];
     
    // }

}
