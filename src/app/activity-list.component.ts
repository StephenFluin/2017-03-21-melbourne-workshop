import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-activity-list',
  template: `
<div *ngFor="let activity of activities | async" class="activity">
  <h2>{{activity.title}}</h2>
  <p>{{activity.description}}</p>
</div>
  `,
  styles: []
})
export class ActivityListComponent {

  activities: Observable<any>;

  constructor(http: Http) {
    this.activities = http.get('https://melbourne-things-to-do.firebaseio.com/activities.json')
    .map(res => res.json());
  }

}
