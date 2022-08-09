# BLE_cordova_app
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
