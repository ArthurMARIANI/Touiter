import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { AlertService, AuthenticationService, UserService} from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-menubar',
    templateUrl: 'menubar.component.html',
    styleUrls: ['menubar.component.css']

})
export class MenubarComponent {
  userprofile: any = [];
  constructor(
      private userService: UserService,
      private AuthenticationService: AuthenticationService) {}

  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
           this.userprofile = data;
         });
  }

  logout(){
    this.AuthenticationService.logout();
  }
}
