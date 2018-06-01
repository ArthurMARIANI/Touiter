import { Component } from '@angular/core';
import { AlertService, AuthenticationService} from './_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tweets';

  constructor(
      private authenticationService: AuthenticationService,
      private alertService: AlertService) {
      }

  is_logged() {
    if(this.authenticationService.is_logged()){
      return true;
    }
    else{
      this.authenticationService.logout()
      return false;
    }
  }

}
