import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import "rxjs/Rx"
import {Recipe} from "../recipes/recipe.model";
/**
 * Created by jambarbo on 1/19/2018.
 */
@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://recipe-app-30cd6.firebaseio.com/recipes.json', this.recipeService.getRecipes())
  }

  getRecipes() {
    return this.http.get('https://recipe-app-30cd6.firebaseio.com/recipes.json')
      .subscribe((response: Response) => {
      const recipes: Recipe[] =  response.json();
      this.recipeService.setRecipes(recipes)
      console.log(recipes)
      return recipes;
    });
  }
}
