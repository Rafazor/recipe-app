import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  private url = 'https://betsy-43ad5.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipesServices: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipesServices.getRecipes();
    this.http.put(
      this.url,
      recipes
    ).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.url)
      .pipe(
        map(
          recipes => {
            return recipes.map(
              recipe => {
                return {
                  ...recipe,
                  ingredients: recipe.ingredients ? recipe.ingredients : []
                };
              }
            );
          }
        ),
        tap(
          recipes => {
            this.recipesServices.setRecipes(recipes);
          }
        )
      );
  }
}
