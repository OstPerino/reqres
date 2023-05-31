import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersItemComponent} from './components/users-item/users-item.component';
import {ResourcesItemComponent} from './components/resources-item/resources-item.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {FormsModule} from "@angular/forms";
import { CustomButtonComponent } from './components/UI/custom-button/custom-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersItemComponent,
    ResourcesItemComponent,
    MainPageComponent,
    UserPageComponent,
    CustomButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
