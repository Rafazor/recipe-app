import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Cascaval Pane', 'Wow!', 'https://pizzaka.ro/wp-content/uploads/2018/03/PORTIECASCAVALPANE.10LEIJPG.jpg'),
    new Recipe('Cascaval Pane', 'daaaa!', 'https://pizzaka.ro/wp-content/uploads/2018/03/PORTIECASCAVALPANE.10LEIJPG.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeClick(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
