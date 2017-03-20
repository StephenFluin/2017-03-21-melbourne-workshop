import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Workshop';

    constructor(router: Router, activatedRoute: ActivatedRoute, title: Title) {
    router.events.filter(e => e instanceof NavigationEnd).subscribe((n: NavigationEnd) => {
      let pageTitle = router.routerState.snapshot.root.children[0].data['title'];
      if (pageTitle) {
        title.setTitle(pageTitle);
      } else if (pageTitle !== false) {
        title.setTitle("Site Default");
      }
    });
  }
}
