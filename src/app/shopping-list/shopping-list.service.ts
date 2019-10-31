import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Mere', 4),
    new Ingredient('Pere', 2),
    new Ingredient('Pita', 3),
    new Ingredient('cas', 4)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addNewIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsAdded.next(this.ingredients);
  }
}
