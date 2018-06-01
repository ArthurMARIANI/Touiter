import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
        constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/users/login', { username: username, password: password })
            .map(user => {
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify({
                      username,
                      token:user.token,
                      auth: user.auth,
                    }));
                }
                return user;
            });
    }

    is_logged(){
      if (localStorage.getItem('currentUser')) {
          return true;
      }
      else{
        return false;
      }
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}