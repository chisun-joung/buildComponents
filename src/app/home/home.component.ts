/**
 * Created by chisunjoung on 2016. 12. 12..
 */

import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {SimpleService} from "../services/services.module";
import {WidgetThree} from "../widgets/widget-three.component";
@Component({
  selector: 'home',
  template: `
  <div #container></div>
  
`
})
export class HomeComponent{
  constructor(
    private resolver:ComponentFactoryResolver){}

  @ViewChild('container', {read:ViewContainerRef}) container;

  ngAfterContentInit(){
    const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
    this.container.createComponent(widgetFactory);
  }

}
