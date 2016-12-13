/**
 * Created by chisunjoung on 2016. 12. 12..
 */
import {Component} from "@angular/core";
@Component({
  selector: 'widget-two',
  template: `
<h1>Above</h1>
<ng-content select="[header]"></ng-content>
<ng-content select="[content]"></ng-content>
<ng-content select="[footer]"></ng-content>
<h1>Below</h1>
`,
  styles:[`
:host{
  display: block;
  border: 3px solid red;
}
`]
})
export class WidgetTwo{

}
