import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) name: ElementRef;
  @ViewChild('amountInput', {static: false}) amount: ElementRef;
  @Output() newIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  addItem() {
    this.newIngredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }
}
