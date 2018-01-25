import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {AuthGuard} from "./auth/auth.guard";

const appRoutes: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: '',  redirectTo: '/recipes', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
