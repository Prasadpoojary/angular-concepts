import { Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class ColorDirective {

  @Input() backgroundColor = '#fff';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.backgroundColor = '#88c95b';
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.backgroundColor =  '#fff';
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.backgroundColor);
  }

}