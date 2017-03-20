import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-submit',
  template: `
Title: <input [(ngModel)]="submission.title">
Description: <input [(ngModel)]="submission.description">
<button type="button" (click)="submit()">Submit</button>

  `,
  styles: []
})
export class SubmitComponent {

 submission: {title?: string, description?: string} = {};
  constructor(public af: AngularFire) {}

  submit() {
    this.af.database.list('queue')
    .push(this.submission);
    this.submission = {};
  }

}
