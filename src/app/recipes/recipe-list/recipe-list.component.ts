import { Component, OnInit} from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from "../recipe.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable, Observer} from "rxjs"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.onRecipesChange.subscribe((recipes) => {
      this.recipes = recipes;
      console.log(recipes)
      console.log("---")
    });

    // const observable = Observable.interval(300);
    // observable.take(2).map((data)=>{return data+"a"}).subscribe( (data) => {
    //     console.log(data);
    //   },()=> {},
    //   ()=> { console.log("completered")})
    //
    // const os = Observable.create( (observer: Observer<string>) => {
    //   setTimeout(()=>
    //       observer.next("test")
    //     ,2000);
    //   setTimeout(
    //     ()=>
    //       observer.next("test2"),4000);
    // })
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

