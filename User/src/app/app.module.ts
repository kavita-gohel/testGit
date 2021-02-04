import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SingleUserComponent } from './user/single-user/single-user.component';
import { ProfileComponent } from './user/profile/profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SingleUserComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule
  ],
  exports:[
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
