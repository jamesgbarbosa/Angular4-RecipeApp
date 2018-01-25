import {NgModule} from '@angular/core';
import {DropDown} from './dropdown';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [DropDown],
  exports: [DropDown, CommonModule]
})
export class SharedModule {

}
