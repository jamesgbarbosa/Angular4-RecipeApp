import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from "../recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(ingredients);
    this.router.navigate(['../../','shopping-list'], {relativeTo: this.route}); // this.router.navigate(['/shopping'])
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipe(+params['id']);

      // if(!this.recipe) {
      //   console.log("Page not found");
      //   this.router.navigate(['/not-found'] , {relativeTo: this.route})
      // }
    });
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipe)
    this.router.navigate(['/recipes'] , {relativeTo: this.route})
  }

  onEditComponent() {
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

}
