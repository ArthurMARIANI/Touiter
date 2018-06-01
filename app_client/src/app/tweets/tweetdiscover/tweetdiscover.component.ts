import { Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService, UserService, TweetService} from '../../_services/index';
import { Router } from '@angular/router';


import {TweetsModule} from '../tweets.module';



@Component({
    moduleId: module.id,
    selector: 'app-tweetdiscover',
    templateUrl: 'tweetdiscover.component.html',
    styleUrls: ['../tweets.css']
})


export class TweetDiscoverComponent extends TweetsModule{
 model: any = {};
 loading = false;
 returnUrl: string;
 tweets: any = [];
 userfriends: any = [];
 constructor(
   private http: HttpClient,
   private route: ActivatedRoute,
   private router: Router,

   private userService: UserService,
   private alertService: AlertService,
   private tweetService: TweetService,) {
}
 ngOnInit() {

     this.userService.getProfile().subscribe(data => {
       this.userprofile = data;
       this.username =  this.userprofile.username;


       this.http.get('http://localhost:3000/tweets/discoverFeed/'+JSON.parse(localStorage.getItem('currentUser')).username).subscribe(data => {
          this.tweets = data.reverse();
       });

        this.http.get('http://localhost:3000/users/friends/'+JSON.parse(localStorage.getItem('currentUser')).username).subscribe(data => {
         this.userfriends = data;
       });
     });
 }

 publish() {
   this.loading = true;
   this.model.author = this.userprofile.username;
   this.tweetService.publish(this.model)
       .subscribe(
           data => {
               this.alertService.success('posted', true);
               this.router.navigate(['/discover']);
           },
           error => {
               this.alertService.error(error);
               this.loading = false;
           });
 }
}
