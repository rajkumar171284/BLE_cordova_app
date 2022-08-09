# BLE_cordova_app

<!-- BLE Scanning and Navigating App -->
<!-- The below are the steps to run & develope APK file  -->
1,Run the app by entering "ionic serve" cmd in Terminal will open localhost server with default port 8100 Landing page is shown https://user-images.githubusercontent.com/39267446/183577334-d8725999-12ae-4aa2-b5e0-1bc7a5e2e31d.png


<!-- Technical Flow -->
App contains 2 pages only.
BLE list page & Mimic diagram page where we embeded BLE devices.
<!-- BLE list page -->

1,As soon as the app runs, it will get routed to bl-list.ts component where we installed our BLE service & Geolocation service .

2,https://ionicframework.com/docs/native/ble 
import { BLE } from '@awesome-cordova-plugins/ble/ngx'  -

3,  https://ionicframework.com/docs/native/geolocation; 
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx'


The above cordova plugins will enable BLE & Geolocation of your device.

3,To scan the BLE around us,hitting Scan button on the screenshot shown, it gives list of availabe BLE devices & we matches our planted BLE status with green color with RSSI.By default we already maintained our static BLE list in main.ts under App folder.Result as screenshot

https://user-images.githubusercontent.com/39267446/183579803-33a0d5c1-efa3-4037-a0ae-39269e727f49.png

3, Scanning can be stopped by using stop button.
<!-- Mimic diagram  -->

<!-- Logic followed in this page as -->
1,https://ionicframework.com/docs/native/device-motion
import { DeviceMotion } from '@awesome-cordova-plugins/device-motion/ngx' ;

2,https://ionicframework.com/docs/native/ble; 
import { BLE } from '@awesome-cordova-plugins/ble/ngx'  -

3,  https://ionicframework.com/docs/native/geolocation; 
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx'

a,When the page loads, watchPosition will run based on the device movement.Whenever there is the change in the position,it will start calling scan function to get the BLE RSSI range value by calling BLE'S SCAN APi.
b, calculation for finding nearest distance
<!-- nearest distance -->
const Measured_Power = -69;
getDistance(rssi: number): void {
        if (rssi >= -60 && rssi <= 0) {
            this.N = 2;
            this.strengthColor = 'teritary';
            this.circleColor = '#3880ff';
        } else if (rssi < -60 && rssi >= -70) {
            this.N = 2;
            this.strengthColor = 'success';
            this.circleColor = '#00CC33';

        } else if (rssi < -70) {
            this.N = 2;
            this.strengthColor = 'warning';
            this.circleColor = '#e40000';

        }
        const distance = Math.pow(10, (Measured_Power - (rssi)) / (10 * this.N))
        this.Distance = parseFloat(distance.toFixed(2));

    }
<!-- getNearByLocated for animation -->
    getNearByLocated(meter: number) {        
        if (meter <= .8) {
            return true
        } else {
            return false
        }
    }

=======
BLE Scanning and Navigating App
The below are the steps to run & develope APK file
a,Run the app by entering "ionic serve" cmd in Terminal will open localhost server with default port 8100
Landing page is shown https://user-images.githubusercontent.com/39267446/183577334-d8725999-12ae-4aa2-b5e0-1bc7a5e2e31d.png




**Technical Flow**
 As soon as the app runs, it will get routed to bl-list.ts component where we installed our BLE service & Geolocation service .
<!--bl-list.ts  -->
import { BLE } from '@awesome-cordova-plugins/ble/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
The above plugins will enable BLE & Geolocation of your device.
>>>>>>> c0218aab2d6d29c7df07b593acca71a052628a08
