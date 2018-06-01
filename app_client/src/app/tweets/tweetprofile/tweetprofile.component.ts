import { Component, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import { ActivatedRoute } from '@angular/router';
import {AlertService, AuthenticationService, UserService} from '../../_services/index';

import {TweetsModule} from '../tweets.module';


@Component({
    moduleId: module.id,
    selector: 'app-tweetprofile',
    templateUrl: 'tweetprofile.component.html',
    styleUrls: ['../tweets.css']
})



export class TweetProfileComponent extends TweetsModule{

 tweets: any;
 userfriends: any;

 constructor(
   private http: HttpClient,
   private route: ActivatedRoute,
   private userService: UserService,
   private alertService: AlertService,
 ) {
}

  ngOnInit() {
    let uid : any;
    this.route.params.subscribe(params => {
      uid = params.uid;

    this.userService.getProfile().subscribe(data => {
           this.userprofile = data;
           this.username =  this.userprofile.username;
           console.log(this.userprofile)

         });
  })

    this.http.get('http://localhost:3000/tweets/profileTweets/'+uid).subscribe(data => {
      this.tweets = data.reverse();
    });
  }
}


