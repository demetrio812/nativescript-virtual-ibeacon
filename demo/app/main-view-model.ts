import {Observable} from 'data/observable';
import {NativescriptVirtualIbeacon} from 'nativescript-nativescript-virtual-ibeacon';

export class HelloWorldModel extends Observable {
  private nativescriptVirtualIbeacon: NativescriptVirtualIbeacon;

  constructor() {
    super();

    this.nativescriptVirtualIbeacon = new NativescriptVirtualIbeacon();
  }

  start() {
    this.nativescriptVirtualIbeacon.startAdvertisingBeaconWithString("DF11F424-F203-4B2A-AB47-4D56D80523E8", "HelloID", 10003, 69);
  }

  stop() {
    this.nativescriptVirtualIbeacon.stopAdvertisingBeacon();
  }
}