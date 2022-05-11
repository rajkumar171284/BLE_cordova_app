import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-iot-ble',
  templateUrl: './iot-ble.component.html',
  styleUrls: ['./iot-ble.component.scss'],
  providers: [FormBuilder]
})
export class IotBleComponent implements OnInit {
  bleForm = this.fb.group({
    name: [''],
    Distance: [''],
    SNo: [''],
    active: [''],
    circleColor: [''],
    deviceColor: [''],
    id: ['', Validators.required],
    isBLEMatched: [''],
    loc: ['', Validators.required],
    rssi: [''],
    strengthColor: [''],
  })
  constructor(public toastController: ToastController, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(res => {
      console.log(res)
      this.bleForm.get('id').setValue(res.id);
      let name;
      (res.name) ? name = this.bleForm.get('name').setValue(res.name) : '';
      console.log(this.bleForm)
    })
  }

  submit() {
    // console.log(this.bleForm)
    // if (!this.bleForm.valid) {
    //   this.presentToast('Input missing..');
    //   return;
    // }


    // let params = {
    //   Distance: "0",
    //   SNo: 0,
    //   active: "In-Active",
    //   circleColor: "",
    //   deviceColor: "#3880ff",
    //   id: this.bleForm.get('id').value,
    //   isBLEMatched: false,
    //   loc: this.bleForm.get('loc').value,
    //   name: this.bleForm.get('name').value,
    //   rssi: 0,
    //   strengthColor: "medium"

    // }
    // this.api.addNewBLE(params).then(res => {
    //   console.log(res)
    //   this.presentToast('Your settings have been saved.');
    //   this.back();
      
    // })

  }

  back() {
    this.router.navigate(['tabs/tab1'])
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
