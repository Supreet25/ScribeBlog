import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule} from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapatilizePipe } from './capatilize.pipe';
import { InterestComponent } from './interest/interest.component';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';

import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';

import { PostComponent } from './post/post.component';
import { HttpClientModule }    from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


let config = {
  apiKey: "AIzaSyAKFYUOlYiGEFegPcNuAUEMACiPTTtevEU",
  authDomain: "work-9261e.firebaseapp.com",
  databaseURL: "https://work-9261e.firebaseio.com",
  projectId: "work-9261e",
  storageBucket: "work-9261e.appspot.com",
  messagingSenderId: "692199983081",
  appId: "1:692199983081:web:c99a03ebb3f12eb10dad78",
  measurementId: "G-JRHLCJ4WV5"
};

firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapatilizePipe,
    InterestComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
    UserprofileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    HttpClientModule
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
