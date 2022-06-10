// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url:'http://127.0.0.1:3000/api',
  url: 'http://192.168.1.3:3000/api',//public ip

  firebase:{
    apiKey: "AIzaSyA1TArnI9A1XjWL7Cjpfj36PJrAPz5V0kg",
  authDomain: "bleapp-a7449.firebaseapp.com",
  projectId: "bleapp-a7449",
  storageBucket: "bleapp-a7449.appspot.com",
  messagingSenderId: "874663814266",
  appId: "1:874663814266:web:30a1baa380d657a57a47c3",
  measurementId: "G-NYCVKYB3ZW"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
