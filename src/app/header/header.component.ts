import { Component } from '@angular/core';
import {Response} from "@angular/http";
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService, private authService:AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((response: Response) => {
      console.log(response)
    })
  }

  signOut() {
    this.authService.signout();
    console.log("Sign out success")
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
