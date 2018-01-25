import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {AuthGuard} from "../auth/auth.guard";
import {AuthService} from "../auth/auth.service";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "../recipes/recipe.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [HeaderComponent, AppRoutingModule],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard]
})
export class CoreModule {

}
