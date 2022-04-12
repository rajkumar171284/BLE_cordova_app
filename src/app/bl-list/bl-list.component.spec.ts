import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlListComponent } from './bl-list.component';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ApiService } from '../api.service';

describe('BlListComponent', () => {
  let component: BlListComponent;
  let fixture: ComponentFixture<BlListComponent>;
 
  let pluginBLE;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('FireBase Service',()=>{
  let apiService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers:[ApiService]
    });
    apiService=TestBed.inject(ApiService)

  });
  it('FireBase Service created',()=>{
    expect(ApiService).toBeDefined()
  })
})
