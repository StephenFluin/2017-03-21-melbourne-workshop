import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list.component';
import { ActivityViewComponent } from './activity-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ActivityListComponent,
        data: { title: 'Things To Do' }
      },
      { path: 'activities/:title', component: ActivityViewComponent },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
        data: { title: 'About This App' }
      },
      {
        path: 'submit',
        loadChildren: './submit/submit.module#SubmitModule',
        data: { title: 'Submit a new Activity' }
      },
    ]),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBesFDpTApha8DzEfajOYSJhUhpdNCbULg",
      authDomain: "melbourne-things-to-do.firebaseapp.com",
      databaseURL: "https://melbourne-things-to-do.firebaseio.com",
      storageBucket: "melbourne-things-to-do.appspot.com",
      messagingSenderId: "610780297110"
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
