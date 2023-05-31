import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {AuthPageComponent} from "./pages/auth-page/auth-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: "main", component: MainPageComponent},
  {path: "user/:id", component: UserPageComponent},
  {path: "auth", component: AuthPageComponent},
  {path: "registration", component: RegistrationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
