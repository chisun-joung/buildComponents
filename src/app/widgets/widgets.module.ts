/**
 * Created by chisunjoung on 2016. 12. 12..
 */
import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwo} from "./widget-two.component";
@NgModule({
  declarations:[WidgetOne,WidgetTwo],
  exports:[WidgetOne,CommonModule,WidgetTwo],
  imports:[CommonModule]
})
export class WidgetModule{}
