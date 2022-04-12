import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveIf]'
})
export class DirectiveIfDirective {

  show: boolean = false;
  constructor(private templateRef: TemplateRef<any>, private container: ViewContainerRef) { }

  @Input()
  set appDirectiveIf(show: boolean) {
    this.show ? this.container.createEmbeddedView(this.templateRef):this.container.clear()
  }
}
