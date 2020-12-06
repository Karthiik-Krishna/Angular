import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private _tempRef:TemplateRef<any>, private _viewContRef: ViewContainerRef) { }

  @Input() set appTest(count:number){
    for(let i=0;i<count;i++){
      this._viewContRef.createEmbeddedView(this._tempRef)
    }
  }

}
