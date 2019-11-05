import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Mere', 4),
    new Ingredient('Pere', 2),
    new Ingredient('Pita', 3),
    new Ingredient('cas', 4)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addNewIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsAdded.next(this.ingredients);
  }

  updateIngredient(index, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsAdded.next(this.ingredients.slice());
  }
}
