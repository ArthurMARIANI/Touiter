import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

// Custom Components
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TweetFriendsComponent } from './tweets/tweetfriends/tweetfriends.component';
import { TweetDiscoverComponent } from './tweets/tweetdiscover/tweetdiscover.component';
import { TweetProfileComponent } from './tweets/tweetprofile/tweetprofile.component';

import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { AlertService, AuthenticationService, UserService, TweetService } from './_services/index';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TweetsModule } from './tweets/tweets.module';



@NgModule({

  bootstrap: [AppComponent],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    TweetsModule,
  ],

  declarations: [
    AppComponent,
    SidebarComponent,
    MenubarComponent,
    TweetFriendsComponent,
    TweetDiscoverComponent,
    TweetProfileComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
  ],

  providers: [
    UserService,
    TweetService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
