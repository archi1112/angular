import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

//  Major benefit of using directives is we can reuse the code 
export class HighlightDirective {
el:ElementRef
  //  in constructor we can get reference to the dom element
  // and use refernce to change properties
  constructor(el:ElementRef) { 
    el:ElementRef
    this.el=el
  }

  @HostBinding("style.color")
  color = "red"


  // used to add listener on dom elements
  @HostListener("mouseenter")
  changeFontSize(){
    this.el.nativeElement.style.fontSize="50px";
    console.log("mouseenter")
  }
  @HostListener("mouseleave")
 resetFontSize(){
   
  this.el.nativeElement.style.fontSize="30px";
  }
}
