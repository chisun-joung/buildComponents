/**
 * Created by chisunjoung on 2016. 12. 12..
 */
import {Component, Input} from "@angular/core";
@Component({
  selector: 'widget-one',
  template: `
<h1>One's message</h1>
<h3>{{message}}</h3>
`,
  styles:[`
:host{
  display: block;
  border: 3px dashed black;
  font-family: "Times New Roman";
}
`]
})
export class WidgetOne{
  @Input() message;
}
