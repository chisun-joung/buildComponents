/**
 * Created by chisunjoung on 2016. 12. 12..
 */
import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one.component";
import {CommonModule} from "@angular/common";
import {WidgetTwo} from "./widget-two.component";
import {WidgetThree} from "./widget-three.component";
@NgModule({
  declarations:[WidgetOne,WidgetTwo, WidgetThree],
  entryComponents:[WidgetThree],
  exports:[WidgetOne,CommonModule,WidgetTwo, WidgetThree],
  imports:[CommonModule]
})
export class WidgetModule{}
