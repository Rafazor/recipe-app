import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cascaval Pane', 'Wow!', 'https://pizzaka.ro/wp-content/uploads/2018/03/PORTIECASCAVALPANE.10LEIJPG.jpg'),
    new Recipe('Cascaval Pane', 'daaaa!', 'https://pizzaka.ro/wp-content/uploads/2018/03/PORTIECASCAVALPANE.10LEIJPG.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
