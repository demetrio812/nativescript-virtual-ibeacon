import {Observable} from 'data/observable';
import {NativescriptVirtualIbeacon} from 'nativescript-virtual-ibeacon';

export class HelloWorldModel extends Observable {
  private nativescriptVirtualIbeacon: NativescriptVirtualIbeacon;

  constructor() {
    super();
    this.nativescriptVirtualIbeacon = new NativescriptVirtualIbeacon();
  }

  start() {
    this.nativescriptVirtualIbeacon.startAdvertisingBeaconWithString("2f234454-cf6d-4a0f-adf2-f4911ba9ffa6", "HelloID", 123, 456);
  }

  stop() {
    this.nativescriptVirtualIbeacon.stopAdvertisingBeacon();
    //this.nativescriptVirtualIbeacon.startAdvertisingBeaconWithString("2f234454-cf6d-4a0f-adf2-f4911ba9ffa7", "HelloID2", 123, 321);
  }
}