import { Observable } from 'data/observable';
export declare class Common extends Observable {
    constructor();
    startAdvertisingBeaconWithString(uuid: any, identifier: any, major: any, minor: any): void;
    stopAdvertisingBeacon(): void;
}
