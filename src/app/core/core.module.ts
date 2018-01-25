import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [SharedModule, AppRoutingModule],
  exports: [HeaderComponent, AppRoutingModule]
})
export class CoreModule {

}
