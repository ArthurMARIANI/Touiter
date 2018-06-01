import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        if (this.model.profilepic == null){
          this.model.profilepic = "https://pbs.twimg.com/profile_images/987438867040043008/kf4hyXEb_bigger.jpg"
        }
        if (this.model.coverpic == null){
          this.model.coverpic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_yZvSj4Hey-KrV41kLtQVH8bTkgL8sH2DPwhdTgII1dcvMha-w"
        }
        console.log(this.model) 
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
