import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";

const routes: Routes = [
  {path: "main", component: MainPageComponent},
  {path: "user/:id", component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
