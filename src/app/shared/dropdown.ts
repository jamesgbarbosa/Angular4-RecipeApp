import {Directive, HostListener, HostBinding, ElementRef} from "@angular/core";
@Directive({
  selector: '[appDropdown]'
})
export class DropDown {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event.target']) toggle(target) {
    this.isOpen = !this.isOpen;
    if(!this.elementRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }
  constructor(private elementRef: ElementRef) {}
}
