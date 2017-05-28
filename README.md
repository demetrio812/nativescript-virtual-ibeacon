[![npm](https://img.shields.io/npm/v/nativescript-virtual-ibeacon.svg)](https://www.npmjs.com/package/nativescript-virtual-ibeacon)
[![npm](https://img.shields.io/npm/dt/nativescript-virtual-ibeacon.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-virtual-ibeacon)

# NativeScript Virtual Beacon Transmitter
Transform your phone in an iBeacon transmitter (only in foreground).

### Install it
```
tns plugin add nativescript-virtual-ibeacon
```

### Use it
```typescript
import {NativescriptVirtualIbeacon} from 'nativescript-virtual-ibeacon';
let nativescriptVirtualIbeacon: NativescriptVirtualIbeacon = new NativescriptVirtualIbeacon();
```
```typescript
this.nativescriptVirtualIbeacon.startAdvertisingBeaconWithString("2f234454-cf6d-4a0f-adf2-f4911ba9ffa6", "HelloID", 123, 456);
```
```typescript
this.nativescriptVirtualIbeacon.stopAdvertisingBeacon();
```
### TODO
* Better Demo
* Check if the transmission is supported by the phone
* Debug