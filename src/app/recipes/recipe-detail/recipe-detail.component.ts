import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  addRecipeToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addNewIngredients(ingredients);
  }
}
