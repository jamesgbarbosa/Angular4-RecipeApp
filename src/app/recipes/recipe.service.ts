import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  onRecipesChange = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(1,'Recipe1', 'This is a yummy food',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
      , [new Ingredient('Bread', 1),new Ingredient('Apple', 5)]),
    new Recipe(2,'Spicy Butter', 'This is the best food ive ever eaten!',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    , [new Ingredient('Butter', 11),new Ingredient('Orange', 5)]),
    new Recipe(3,'Pancakes', 'This is the best food ive ever eaten!',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    , [new Ingredient('Milk', 5),new Ingredient('Egg', 5)]),
    new Recipe(4,'Chicken Roast', 'This is the best food ive ever eaten!',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    , [new Ingredient('Chicken', 2),new Ingredient('Garlick', 5)]),
    new Recipe(5,'Curry', 'Best curry in town!!',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    , [new Ingredient('Curry', 10),new Ingredient('Orange', 5)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.generateId();
    this.recipes.push(recipe);
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
}
