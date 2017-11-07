import {Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor =this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
