import {Common} from './nativescript-virtual-ibeacon.common';
import * as dialogs from 'ui/dialogs';

declare var BUOYBeacon: any;

export class NativescriptVirtualIbeacon extends Common {

    private deviceBeacon = BUOYBeacon.deviceBeacon();

    public startAdvertisingBeaconWithString(uuid, identifier, major, minor) {
        let uuidObj = new NSUUID({UUIDString: uuid});
        this.deviceBeacon.setWithProximityUUIDMajorMinorIdentifier(uuidObj, major, minor, identifier);
        this.deviceBeacon.startTransmitting();
        dialogs.alert("iOS Started");
        console.log("iOS Started");
    }

    public stopAdvertisingBeacon() {
        this.deviceBeacon.stopTransmitting();
        dialogs.alert("iOS Stopped");
        console.log("iOS Stopped");
    }

}