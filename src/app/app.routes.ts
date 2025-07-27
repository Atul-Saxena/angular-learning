import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { authGuard } from './guards/auth-guard.guard';
import { userAuthGuard } from './guards/user-auth.guard';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { AddPostFormComponent } from './components/add-post-form/add-post-form.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: 'home', component: HomeComponent, canActivate:[authGuard]},
    { path: 'post-list', component: PostListComponent, canActivate:[authGuard,userAuthGuard]},
    { path: 'user-list', component: UserListComponent, canActivate:[authGuard,adminAuthGuard]},
    { path: 'post/:id', component: PostDetailsComponent, canActivate:[authGuard,userAuthGuard]},
    { path: 'user/:id', component: UserProfileComponent, canActivate:[authGuard]},
    { path: 'create-post', component: AddPostFormComponent, canActivate:[userAuthGuard]},
    { path: 'create-user', component: AddUserFormComponent, canActivate:[adminAuthGuard]},
    { path: '**', redirectTo: '/not-found' },
];
