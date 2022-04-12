import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDragdrop]'
})
export class DragdropDirective {
  
  canDrag: boolean;

  currentX: number;
  currentY: number;

  initialX: number
  initialY: number;

  xOffset = 0;
  yOffset = 0;
  
  selectedElement;
  @HostListener('dragend', ['$event'])
  onDragEnd($event: Event) {
      // this.dragOver.emit(false);
      $event.preventDefault();
      return false;
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: Event) {
      $event.preventDefault();
      return false;
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter() {
    console.log('dragenter')
      // this.dragOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave() {

      // this.dragOver.emit(false);
  }
  // @HostListener('click') onclick(e: Event) {
  //   console.log('button');
   
  // }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    console.log('mousedown');

    // we make sure only draggables on the document elements are selected
    // if (event.target.getAttribute('draggable')) {
      console.log('mousedown');
  
      this.currentX = event.clientX;
      this.currentY = event.clientY;
      this.selectedElement = event.target;
      // ##### add this code.
      event.preventDefault();    // choose one
      // ##### or add this code.
      return false;    // choose one
    // }
  }
  
  constructor(private el: ElementRef) { }


  // someHandler(event): {
  //   let elements = document.elementsFromPoint(event.clientX, event.clientY);
  //   let target = elements.find(e => e.matches('#obscuring-div'));
  //   target.dispatchEvent(new DragEvent('drop', {
  //     // anything you need to pass; works without that in the simplest case
  //   }));
  // }
  
  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  public dragStart(e) {
    if (e.type === "touchstart") {
      console.log(e.type)
      this.initialX = e.touches[0].clientX - this.xOffset;
      this.initialY = e.touches[0].clientY - this.yOffset;
    } else {
      this.initialX = e.clientX - this.xOffset;
      this.initialY = e.clientY - this.yOffset;
    }

    if (e.target === this.el.nativeElement) {
      this.canDrag = true;
    }
  }


  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  public dragEnd(e) {
    this.initialX = this.currentX;
    this.initialY = this.currentY;
    this.canDrag = false;
  }


  @HostListener('touchmove', ['$event'])
  @HostListener('mousemove', ['$event'])
  public drag(e) {
    if (this.canDrag) {
      e.preventDefault();

      if (e.type === "touchmove") {
        this.currentX = e.touches[0].clientX - this.initialX;
        this.currentY = e.touches[0].clientY - this.initialY;
      } else {
        this.currentX = e.clientX - this.initialX;
        this.currentY = e.clientY - this.initialY;
      }

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;
      console.log('this.currentX',this.currentX,this.currentY)
      this.el.nativeElement.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0)`;

    }
  }
}
