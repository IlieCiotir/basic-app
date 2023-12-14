import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseHighlight]',
  standalone: true
})
export class MouseHighlightDirective {

  @Input('appMouseHighlight')
  color = 'red';

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  mouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.color;
    // this.el.nativeElement.style.transform = 'scale(1.1) 300ms';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'initial';
  }
}

