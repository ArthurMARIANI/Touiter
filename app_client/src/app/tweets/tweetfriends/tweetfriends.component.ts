import { Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import {AlertService, AuthenticationService, UserService, TweetService} from '../../_services/index';

import {TweetsModule} from '../tweets.module';


@Component({
    moduleId: module.id,
    selector: 'app-tweetfriends',
    templateUrl: 'tweetfriends.component.html',
    styleUrls: ['../tweets.css'],
    inputs:['userprofile']
})



export class TweetFriendsComponent extends TweetsModule{
 tweets: any;
 userfriends: any;
 @Input() userprofile:string;

 constructor(
   private http: HttpClient,
   private route: ActivatedRoute,
   private userService: UserService,
   private alertService: AlertService,
   private tweetService: TweetService){}

  ngOnInit() {
    this.http.get('http://localhost:3000/tweets/friendsFeed/'+JSON.parse(localStorage.getItem('currentUser')).username).subscribe(data => {
      this.tweets = data.reverse();
    });

    this.http.get('http://localhost:3000/users/friends/'+JSON.parse(localStorage.getItem('currentUser')).username).subscribe(data => {
       this.userfriends = data;
    });

    this.userService.getProfile().subscribe(data => {
      this.userprofile = data;
      this.username =  this.userprofile.username;
    });
  }
}


