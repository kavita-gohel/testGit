
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';


  @Injectable({
    providedIn: 'root'
  })
  

export class UserService {

   
   constructor() { }

    public getData() {
      return [
        {id: 1,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 2,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 3,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 4,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 5,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 6,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 7,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 8,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 9,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 10,name:'abc',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'}
  
      ];
      }
    }      
        
      
  
