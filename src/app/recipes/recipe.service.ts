import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
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
}
