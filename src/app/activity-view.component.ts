import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-activity-view',
  template: `
<h1>{{ route.snapshot.params.title }} </h1>
<p>{{(activity | async)?.description}} </p>
  `,
  styles: []
})
export class ActivityViewComponent {

  activities: Observable<any[]>;
  activity: Observable<any>;
  constructor(http: Http, public route: ActivatedRoute) {
    let activities = http.get('https://melbourne-things-to-do.firebaseio.com/activities.json')
      .map(res => res.json());

    activities.subscribe(data => {
      localStorage['activityCache'] = JSON.stringify(data);
    });

    this.activities = activities.startWith(JSON.parse(localStorage['activityCache'] || null));

    this.activity = route.params.switchMap(params => 
      this.activities.map(list => list.find(item => item.title = params['title']))
    );
  }
}
