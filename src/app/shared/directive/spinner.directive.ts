import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective {
  @Input('appSpinner') setSize: string;


  constructor(public el: ElementRef) {
    console.log(el);
    console.log(this.setSize);
    if (this.setSize == "small") {
      this.el.nativeElement.style.zoom = 0.2;
    }
    else {
      this.el.nativeElement.style.zoom = 0.4;
    }

  }

  //  @HostListener('change')onChange(){
  //  this.el.nativeElement.style.zoom=0.2;
  // this.el.nativeElement.style.width = `${(this.el.nativeElement as HTMLElement).offsetWidth}px`;
  // this.el.nativeElement.style.height = `${(this.el.nativeElement as HTMLElement).offsetHeight}px`;

  //  }

}
