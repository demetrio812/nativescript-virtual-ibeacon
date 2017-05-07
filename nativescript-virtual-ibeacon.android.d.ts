import { Common } from './nativescript-virtual-ibeacon.common';
export declare namespace android {
    namespace bluetooth {
        namespace le {
            class AdvertiseCallback {
                static extend(param: {
                    onStartFailure: ((errorCode) => any);
                    onStartSuccess: ((settingsInEffect) => any);
                }): any;
            }
            class AdvertiseSettings {
            }
        }
    }
    namespace os {
    }
}
export declare class NativescriptVirtualIbeacon extends Common {
    private beaconParser;
    private beaconTransmitter;
    private MyAdvertiseCallback;
    constructor();
    startAdvertisingBeaconWithString(uuid: any, identifier: any, major: any, minor: any): void;
    stopAdvertisingBeacon(): void;
    private getContext();
}
