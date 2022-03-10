import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent implements OnInit {
  setValue: boolean = false;
  constructor(private api: ApiService) { }

  ngOnInit() { }



  setCtrl(e) {
    this.setValue = !this.setValue;
    // console.log(this.setValue)
    let p = {
      message: this.setValue
    }
    this.api.setLightControl(p).subscribe(res=>{
      console.log(res)
    })
  }

}
