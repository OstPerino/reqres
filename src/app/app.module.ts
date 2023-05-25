import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { ResourcesListComponent } from './components/resources-list/resources-list.component';
import { UsersItemComponent } from './components/users-item/users-item.component';
import { ResourcesItemComponent } from './components/resources-item/resources-item.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ResourcesListComponent,
    UsersItemComponent,
    ResourcesItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
