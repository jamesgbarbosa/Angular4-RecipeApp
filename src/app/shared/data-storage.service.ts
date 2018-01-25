import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import "rxjs/Rx"
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";
import {tokenKey} from "@angular/core/src/view";
/**
 * Created by jambarbo on 1/19/2018.
 */
@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    return this.authService.getToken().then( (token) => {
      return token;
    }).then( (tk) => {
      this.http.put('https://recipe-app-30cd6.firebaseio.com/recipes.json?auth=' + tk, this.recipeService.getRecipes()).subscribe((res)=>{
      });
    });
  }

  getRecipes() {
    return this.authService.getToken().then( (token) => {
      return token;
    }).then((tk) => {
      this.http.get('https://recipe-app-30cd6.firebaseio.com/recipes.json?auth=' + tk)
        .subscribe((response: Response) => {
          const recipes: Recipe[] =  response.json();
          this.recipeService.setRecipes(recipes)
          console.log(recipes)
          return recipes;
        });
    })
  }
}
