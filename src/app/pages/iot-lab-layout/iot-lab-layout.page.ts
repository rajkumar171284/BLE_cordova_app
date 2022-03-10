import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

@Component({
  selector: 'app-iot-lab-layout',
  templateUrl: './iot-lab-layout.page.html',
  styleUrls: ['./iot-lab-layout.page.scss'],
  providers: [PhotoViewer],

})
export class IotLabLayoutPage implements OnInit {
  slideOpts:any={
    zoom: {
      minRatio: 1,
      maxRatio: 3,
      toggle: true,
      containerClass :'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }

  }
  constructor(private photoViewer: PhotoViewer) { }

  ngOnInit() {
    // this.photoViewer.show('/assets/office-layout.svg', 'My image title', {share: false});
  }

}
