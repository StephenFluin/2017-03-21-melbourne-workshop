import { AngularFire } from 'angularfire2';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';


export class AuthService {
    isAdmin: Observable<boolean>;

    constructor(public af: AngularFire) {
      this.isAdmin =  this.af.auth.switchMap( authState => {
            if(!authState) {
                return Observable.of(false);
            } else {
                return this.af.database.object('/admin/'+authState.uid);
            }
        }).map( adminObject => 
             (adminObject && adminObject['$value'] === true)
        );
    }
}