import {NgModule} from '@angular/core';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListRouting} from './shopping-list.routing';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ShoppingEditComponent,
                 ShoppingListComponent],
  imports: [CommonModule, FormsModule, ShoppingListRouting]
})
export class ShoppingListModule {

}
