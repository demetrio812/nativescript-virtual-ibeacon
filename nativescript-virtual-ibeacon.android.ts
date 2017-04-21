import {Common} from './nativescript-virtual-ibeacon.common';
import * as dialogs from 'ui/dialogs';
import * as application from "application";

declare var org: any;

export declare namespace android {
    export namespace bluetooth {
        export namespace le {
            export class AdvertiseCallback {

                static extend(param: { onStartFailure: ((errorCode) => any); onStartSuccess: ((settingsInEffect) => any) });
            }

            export class AdvertiseSettings {

            }

        }
    }
    export namespace os {

    }
}

// declare var Beacon: any;
// declare var BeaconParser: any;
// declare var BeaconTransmitter: any;

/*export class MyAdvertiseCallback extends android.bluetooth.le.AdvertiseCallback {
 onStartFailure(errorCode) {
 dialogs.alert("Android Error");
 console.log("Android Error");
 }

 onStartSuccess(settingsInEffect) {
 dialogs.alert("Android Started2");
 console.log("Android Started2");
 }
 }*/
export class NativescriptVirtualIbeacon extends Common {

    private beaconParser = null;
    private beaconTransmitter = null;

    private MyAdvertiseCallback = null;

    constructor() {
        super();
        this.beaconParser = new org.altbeacon.beacon.BeaconParser().setBeaconLayout("m:2-3=0215,i:4-19,i:20-21,i:22-23,p:24-24");  // iBeacon layout
        this.beaconTransmitter = new org.altbeacon.beacon.BeaconTransmitter(this.getContext(), this.beaconParser);

        this.MyAdvertiseCallback = android.bluetooth.le.AdvertiseCallback.extend({
            //constructor
            /*init: function() {
             this.super();
             },*/
            onStartFailure: function (errorCode) {
                //dialogs.alert("Android Error");
                console.log("Android Error");
            },

            onStartSuccess: function (settingsInEffect) {
                //dialogs.alert("Android Started2");
                console.log("Android Started2");
            }
        });
    }

    public startAdvertisingBeaconWithString(uuid, identifier, major, minor) {

        /*
         Beacon beacon = new Beacon.Builder()
         .setId1("2f234454-cf6d-4a0f-adf2-f4911ba9ffa6")
         .setId2("1")
         .setId3("2")
         .setManufacturer(0x0118) // Radius Networks.  Change this for other beacon layouts
         .setTxPower(-59)
         .setDataFields(Arrays.asList(new Long[] {0l})) // Remove this for beacon layouts without d: fields
         .build();
         // Change the layout below for other beacon types
         BeaconParser beaconParser = new BeaconParser()
         .setBeaconLayout("m:2-3=beac,i:4-19,i:20-21,i:22-23,p:24-24,d:25-25");
         BeaconTransmitter beaconTransmitter = new BeaconTransmitter(getApplicationContext(), beaconParser);
         beaconTransmitter.startAdvertising(beacon, new AdvertiseCallback() {

         @Override
         public void onStartFailure(int errorCode) {
         Log.e(TAG, "Advertisement start failed with code: "+errorCode);
         }

         @Override
         public void onStartSuccess(AdvertiseSettings settingsInEffect) {
         Log.i(TAG, "Advertisement start succeeded.");
         }
         });

         */
        let beacon = new org.altbeacon.beacon.Beacon.Builder()
            .setId1(uuid)
            .setId2(major + "")
            .setId3(minor + "")
            .setManufacturer(0x4C00) // iBeacon layout
            .setTxPower(-59)
            // .setDataFields(Arrays.asList(new Long[] {0l})) // Remove this for beacon layouts without d: fields
            .build();

        this.beaconTransmitter.startAdvertising(beacon, new this.MyAdvertiseCallback());
        //dialogs.alert("Android Started");
        console.log("Android Started");
    }

    public stopAdvertisingBeacon() {
        this.beaconTransmitter.stopAdvertising();
        //dialogs.alert("Android Stopped");
        console.log("Android Stopped");
    }

    private getContext() {
        let context = application.android.context;
        return context
    }

}