import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Mere', 4),
    new Ingredient('Pere', 2),
    new Ingredient('Pita', 3),
    new Ingredient('cas', 4)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
