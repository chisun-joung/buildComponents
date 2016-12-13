/**
 * Created by chisunjoung on 2016. 12. 12..
 */

import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {SimpleService} from "../services/services.module";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
  selector: 'home',
  template: `
  <button (click)="onClick()">Create Template</button>
  <div #container></div>
  
  <template #template let-description="description">
    <h2>My {{description}} template</h2>
    <button>My {{description}} button</button>
  </template>
  
`
})
export class HomeComponent{
  constructor(
    private resolver:ComponentFactoryResolver){}

  @ViewChild('container', {read:ViewContainerRef}) container;
  @ViewChild('template') template;
    widgetRef;
  ngAfterContentInit(){
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.widgetRef = this.container.createComponent(widgetFactory,2);
    this.widgetRef.instance.message = "I'm Third";
  }

  onClick(){
    this.container.createEmbeddedView(this.template, { description: 'sweet'})
  }

}
