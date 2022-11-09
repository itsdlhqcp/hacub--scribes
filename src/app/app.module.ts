import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

// let config = {
//   apiKey: "AIzaSyDyT_uO9pFs3nDvJWDGH78z14Rkz8G-Je4",
//   authDomain: "scribe-d63dd.firebaseapp.com",
//   databaseURL: "https://scribe-d63dd.firebaseio.com",
//   projectId: "scribe-d63dd",
//   storageBucket: "scribe-d63dd.appspot.com",
//   messagingSenderId: "236969302096"
// };

let config = {
  apiKey: "AIzaSyCN4qCMQ8AsbOkhei6bttJXwnwKp8PHZJ4",
  authDomain: "scribe-ba270.firebaseapp.com",
  databaseURL: "https://scribe-ba270.firebaseio.com",
  projectId: "scribe-ba270",
  storageBucket: "scribe-ba270.appspot.com",
  messagingSenderId: "875857819237",
  appId: "1:875857819237:web:01ffcb1f8965238529788c",
  measurementId: "G-3XFF40CPPM"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
