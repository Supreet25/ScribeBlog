import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string,password:string){
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }
  signup(email:string,password:string,first_name:string,last_name:string){
    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
     (response)=> {
      let randomNumber=Math.floor(Math.random()*1000)
        response.user.updateProfile({
          displayName:first_name+" "+last_name,
          photoURL:"https://unsplash.com/photos/5yENNRbbat4"
        }).then(()=>{
          resolve(response.user);
        }).catch((error)=>{
          reject(error);
        })
      


    }).catch((error)=>{
      reject(error);
    })
  })
}
}
