import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear();
    for (let i = 0; i < times; i++) {
      // duplicates template 'some' number of times
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
