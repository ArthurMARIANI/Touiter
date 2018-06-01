import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Tweet } from '../_models/tweet';

@Injectable()
export class TweetService {
    constructor(private http: HttpClient) { }

    publish(tweet: Tweet) {
      return this.http.post('http://localhost:3000/tweets/create', tweet);
    }
}