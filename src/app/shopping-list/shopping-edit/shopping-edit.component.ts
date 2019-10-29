import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addItem() {
    this.shoppingListService.addNewIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }
}
