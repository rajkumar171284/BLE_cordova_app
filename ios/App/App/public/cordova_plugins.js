
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-device-motion.Acceleration",
          "file": "plugins/cordova-plugin-device-motion/www/Acceleration.js",
          "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
          "Acceleration"
        ]
        },
      {
          "id": "cordova-plugin-ble-central.ble",
          "file": "plugins/cordova-plugin-ble-central/www/ble.js",
          "pluginId": "cordova-plugin-ble-central",
        "clobbers": [
          "ble"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.Coordinates",
          "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "Coordinates"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-device-motion.accelerometer",
          "file": "plugins/cordova-plugin-device-motion/www/accelerometer.js",
          "pluginId": "cordova-plugin-device-motion",
        "clobbers": [
          "navigator.accelerometer"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.geolocation",
          "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "navigator.geolocation"
        ]
        },
      {
          "id": "com-sarriaroman-photoviewer.PhotoViewer",
          "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
          "pluginId": "com-sarriaroman-photoviewer",
        "clobbers": [
          "PhotoViewer"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.Position",
          "file": "plugins/cordova-plugin-geolocation/www/Position.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "Position"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.PositionError",
          "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "PositionError"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "com-sarriaroman-photoviewer": "1.2.4",
      "cordova-plugin-ble-central": "1.4.3",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-device-motion": "2.0.1",
      "cordova-plugin-geolocation": "4.1.0"
    };
    // BOTTOM OF METADATA
    });
    