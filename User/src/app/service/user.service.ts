
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
        {id: 1,name:'test1',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 2,name:'test2',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 3,name:'test3',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 4,name:'test4',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 5,name:'test5',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 6,name:'test6',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 7,name:'test7',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 8,name:'test8',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 9,name:'test9',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'},
        {id: 10,name:'test10',email:'abc@gmail.com',contact:'+91 7787871111',hobbies:['xyz','abc','pqr'],dob:'01/23/2002'}
  
      ];
      }
    }      
        
      
  
