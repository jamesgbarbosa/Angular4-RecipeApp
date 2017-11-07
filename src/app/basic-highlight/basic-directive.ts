import {Directive, ElementRef, OnInit} from "@angular/core";
@Directive({
  selector: '[basic-highlight]'
})
export class BasicDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    console.log("Created11")
  }

  ngOnInit() {
    console.log("Created")
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
