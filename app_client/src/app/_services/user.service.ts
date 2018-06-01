import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getProfile() {
      return this.http.post<User[]>('http://localhost:3000/users/getprofile', {username: JSON.parse(localStorage.getItem('currentUser')).username});
    }

    addFriend(friendname) {
      console.log(JSON.parse(localStorage.getItem('currentUser')).username+ " added " +friendname);
      return this.http.post('http://localhost:3000/users/addfriend', {username: JSON.parse(localStorage.getItem('currentUser')).username, friendname : friendname });
    }

    deleteFriend(friendname) {
      console.log(JSON.parse(localStorage.getItem('currentUser')).username+ " deleted " +friendname);
      return this.http.post<User[]>('http://localhost:3000/users/deletefriend', {username: JSON.parse(localStorage.getItem('currentUser')).username, friendname : friendname });
    }

    create(user: User) {
      console.log(user);
      return this.http.post('http://localhost:3000/users/register', user);
    }
}