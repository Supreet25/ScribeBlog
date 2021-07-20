import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
   
  title:string;
  content:string;
  @Output('postCreated') postCreated= new EventEmitter();
  
 

  constructor() {}
   
  ngOnInit(): void {
  }

  createPost(){

   
   
    firebase.firestore().collection("posts").add({
      title:this.title,
     content:this.content,
      owner:firebase.auth().currentUser.uid,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    }).then((data)=>{
      console.log(data);
      this.postCreated.emit();
    }).catch((error)=>{
      console.log(error);
    });

  }
}