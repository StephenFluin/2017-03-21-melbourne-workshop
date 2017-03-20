import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
