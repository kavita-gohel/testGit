import { UserListComponent } from './user/user-list/user-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { UserService } from './service/user.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
    {path: 'dashboard', component: UserListComponent },
    {path: 'profile', component: SingleUserComponent}
  ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ProfileComponent, SingleUserComponent, UserListComponent]