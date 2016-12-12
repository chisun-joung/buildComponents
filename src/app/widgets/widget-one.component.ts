/**
 * Created by chisunjoung on 2016. 12. 12..
 */
import {Component, Input} from "@angular/core";
@Component({
  selector: 'widget-one',
  template: `
<div>One's message</div>
<h3>{{message}}</h3>
`
})
export class WidgetOne{
  @Input() message;
}
