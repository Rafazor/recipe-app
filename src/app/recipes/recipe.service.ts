import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesUpdated = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cascaval Pane',
      'Wow!',
      'https://pizzaka.ro/wp-content/uploads/2018/03/PORTIECASCAVALPANE.10LEIJPG.jpg',
      [
        new Ingredient('sare', 2),
        new Ingredient('plm', 5),
        new Ingredient('piper', 5)
      ]),
    new Recipe(
      'Cascaval Pane',
      'daaaa!',
      'https://pizzaka.ro/wp-content/uploads/2018/03/PORTIECASCAVALPANE.10LEIJPG.jpg',
      [
        new Ingredient('sare', 2),
        new Ingredient('plm', 5),
        new Ingredient('piper', 5)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getSelectedRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addNewIngredients(ingredients) {
    this.shoppingListService.addNewIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesUpdated.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }
}
