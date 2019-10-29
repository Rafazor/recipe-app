import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

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

  getRecipes() {
    return this.recipes.slice();
  }

  addNewIngredients(ingredients) {
    this.shoppingListService.addNewIngredients(ingredients);
  }
}
