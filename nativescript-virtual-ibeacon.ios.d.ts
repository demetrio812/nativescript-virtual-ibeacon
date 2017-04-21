import { Common } from './nativescript-virtual-ibeacon.common';
export declare class NativescriptVirtualIbeacon extends Common {
    private deviceBeacon;
    startAdvertisingBeaconWithString(uuid: any, identifier: any, major: any, minor: any): void;
    stopAdvertisingBeacon(): void;
}
