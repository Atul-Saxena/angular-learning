import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'post-list', component: PostListComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'post/:id', component: PostDetailsComponent},
    {path: 'user/:id', component: UserProfileComponent},
    {path: '**', redirectTo: '' },
];
