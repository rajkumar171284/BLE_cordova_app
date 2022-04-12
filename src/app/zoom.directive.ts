import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  numberOfClicks = 0;


  highlight(color) {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  
  isToggled:boolean=false;
  @HostListener('click') onclick(e: Event) {
    console.log('button', this.numberOfClicks++);
    this.isToggled=!this.isToggled;
    if(this.isToggled){
      this.renderer.setStyle(this.el.nativeElement, 
      
        'transform', 'translate3d(-24px, 197px, 30px) scale(2.8)'
  
        
        );
    }else{
      this.renderer.setStyle(this.el.nativeElement, 
      
        'transform', 'translate3d(-24px, 197px, 0px) scale(1)'
  
        
        );
    }

  }
}
