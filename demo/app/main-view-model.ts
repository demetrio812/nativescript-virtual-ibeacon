import {Observable} from 'data/observable';
import {NativescriptVirtualIbeacon} from 'nativescript-virtual-ibeacon';

declare var android:any;

export class HelloWorldModel extends Observable {
  private nativescriptVirtualIbeacon: NativescriptVirtualIbeacon;

  constructor() {
    super();

    var permissions = require( "nativescript-permissions" );
    permissions.requestPermission(android.Manifest.permission.ACCESS_FINE_LOCATION, "I need these permissions because I'm cool")
        .then(function() {
          console.log("Woo Hoo, I have the power!");
        })
        .catch(function() {
          console.log("Uh oh, no permissions - plan B time!");
        });
    this.nativescriptVirtualIbeacon = new NativescriptVirtualIbeacon();
  }

  start() {
    this.nativescriptVirtualIbeacon.startAdvertisingBeaconWithString("2f234454-cf6d-4a0f-adf2-f4911ba9ffa7", "HelloID", 123, 456);
  }

  stop() {
    this.nativescriptVirtualIbeacon.stopAdvertisingBeacon();
  }
}