import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Mere', 4),
    new Ingredient('Pere', 2),
    new Ingredient('Pita', 3),
    new Ingredient('cas', 4)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
