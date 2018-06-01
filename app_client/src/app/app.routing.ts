import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TweetFriendsComponent } from './tweets/tweetfriends/tweetfriends.component';
import { TweetDiscoverComponent } from './tweets/tweetdiscover/tweetdiscover.component';
import { TweetProfileComponent } from './tweets/tweetprofile/tweetprofile.component';

import { AuthGuard } from './_guards/auth.guard';


const appRoutes: Routes = [
  {path: '', component: TweetDiscoverComponent, canActivate: [AuthGuard]},
  { path: "friends", component: TweetFriendsComponent, canActivate: [AuthGuard] },
  { path: "discover", component: TweetDiscoverComponent, canActivate: [AuthGuard] },
  { path: "profile/:uid", component: TweetProfileComponent, canActivate: [AuthGuard]},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},

  { path: '**', redirectTo: '' },
];



export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload" }  );