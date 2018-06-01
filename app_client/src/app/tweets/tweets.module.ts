// Angular Imports
import { NgModule } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import {AlertService, AuthenticationService, UserService} from '../_services/index';
import {Injectable, ReflectiveInjector} from '@angular/core';


@NgModule({

     providers: [
      UserService,
      AuthenticationService,
      AlertService,
    ],

})

export class TweetsModule {
  userprofile: any = [];

  constructor(
      private userService: UserService,
      private alertService: AlertService,
      )
      {}

  ngOnInit() {
  }

  tweets: any;
  userfriends:any = [];
  username:string;


  public addFriend(friend){
    this.userfriends.friends[this.userfriends.friends.length] = friend;
    this.userService.addFriend(friend).subscribe();
  }

  public deleteFriend(friend){

    var index = this.userfriends.friends.indexOf(friend);
    if (index > -1) {
     this.userfriends.friends.splice(index, 1);
     this.userService.deleteFriend(friend).subscribe();
    }
  }


  isfriend(author) {
   if(author == this.username){
     return
   }
   if(this.contains(this.userfriends.friends,author)) {
     return true;
   } else {
     return false;
   }
  }

  contains(arr, value) {
     var i = arr.length;
     while (i--) {
         if (arr[i] === value) return false;
     }
     return true;

  }

}
