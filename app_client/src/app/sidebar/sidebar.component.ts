import { Component } from '@angular/core';
import { AlertService, UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {
  userprofile: any = [];
  constructor(
      private userService: UserService,
      private alertService: AlertService,
      ) {}

  ngOnInit() {
    this.userService.getProfile().subscribe(data => {
           this.userprofile = data;
         });
  }
}
