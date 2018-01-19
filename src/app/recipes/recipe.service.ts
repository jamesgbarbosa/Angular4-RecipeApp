import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  onRecipesChange = new Subject<Recipe[]>();

  recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.generateId();
    console.log(this.recipes);
    this.onRecipesChange.next(this.recipes.slice());
  }

  updateRecipe(id: number, recipe: Recipe) {
    recipe.id = id;
    this.recipes[this.recipes.findIndex( element => {return element.id === id })] = recipe;
    this.onRecipesChange.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.findIndex( element => {return element.id === recipe.id }), 1)
    this.onRecipesChange.next(this.recipes.slice())
  }

  getRecipe(id: number) {
    let recipe = this.recipes.find((rec) => {
      return rec.id === id;
    })
    return recipe;
  }

  getRecipes() {
    return this.recipes.slice();
  }

  generateId() {
    return new Date().getTime();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.onRecipesChange.next(this.recipes.slice());
  }
}
