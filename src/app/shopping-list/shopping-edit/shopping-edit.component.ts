import {
  Component,
  OnInit,
  EventEmitter,
  Output, OnDestroy, ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex;
  editedItem;
  constructor(private shoppingListService: ShoppingListService, private  router: Router) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    if (this.editMode) {
      const ingredient = new Ingredient(this.shoppingListForm.value.name, this.shoppingListForm.value.amount)
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.addIngredient(newIngredient);
    }

  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
