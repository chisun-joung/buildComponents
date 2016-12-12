/**
 * Created by chisunjoung on 2016. 12. 12..
 */
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {WidgetModule} from "../widgets/widgets.module";
@NgModule({
  declarations:[HomeComponent],
  exports: [HomeComponent],
  imports: [WidgetModule]
})
export class HomeModule{}
