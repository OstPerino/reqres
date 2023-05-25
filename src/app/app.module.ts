import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from '../components/users-list/users-list.component';
import { ResourcesListComponent } from '../components/resources-list/resources-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ResourcesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
