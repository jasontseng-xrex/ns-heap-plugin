# nativescript-heap-plugin 
---

** This project is in Development mode **


This is a simple plugin for integrating [Heap Analytics](https://heap.io/) into NativeScript Apps.

## Prerequisites / Requirements

#### Ios

 Add `Other Linker Flags`:
   -  Open Xcode with Ios project
   - Click on the project (blue project icon), and select “Build Settings”
   - Within Build Settings, change “Other Linker Flags” to include -all_load -ObjC as a flag
        
 [Link your app](https://help.apple.com/xcode/mac/8.0/#/dev51a648b07) to these libraries:
   - CFNetwork.framework
   - Foundation.framework
   - libicucore.tbd
   - Security.framework
   - SystemConfiguration
   - UIKit

## Installation(Not tested)

```javascript
tns plugin add nativescript-heap-plugin
```

## Usage 

Describe any usage specifics for your plugin. Give examples for Android, iOS, Angular if needed. See [nativescript-drop-down](https://www.npmjs.com/package/nativescript-drop-down) for example.
	
```typescript
import {NSHeap} from "nativescript-heap-plugin";
let heap = new NSHeap("XXXXXXXX"); // Heap envId
heap.initialize();

```

## API

For Ios:

```typescript
export declare class NSHeap {
    private readonly envId;
    private readonly options;
    constructor(envId: string, options?: HeapOptions);
    initialize(): void;
    initializeWithOptions(): void;
    identify(identity: string): void;
    resetIdentity(): void;
    track(event: string): void;
    trackWithProperties(event: string, properties: NSDictionary<any, any>): void;
    addEventProperties(properties: NSDictionary<any, any>): void;
    addUserProperties(properties: NSDictionary<any, any>): void;
    changeInterval(interval: number): void;
    clearEventProperties(): void;
    disableVisualizerPairingGesture(): void;
    enableVisualizer(): void;
    frameworkAutocaptureEventWithSourceWithSourceProperties(event: string, source: string, sourceProperties: NSDictionary<any, any>): void;
    frameworkTrackWithPropertiesWithSourceWithSourceProperties(event: string, properties: NSDictionary<any, any>, source: string, sourceProperties: NSDictionary<any, any>): void;
    libVersion(): string;
    alloc(): Heap;
    new(): Heap;
    removeEventProperty(property: string): void;
    setAppId(newAppId: string): void;
    setEventProperties(properties: NSDictionary<any, any>): void;
    startDebug(): void;
    startEVPairing(): void;
    stopDebug(): void;
    stopEVPairing(): void;
    unsetEventProperty(property: string): void;
    userId(): string;
}
```

For Android

```typescript
export declare class NSHeap {
    private readonly envId;
    private readonly debugMode;
    constructor(envId: string, debugMode?: boolean);
    initialize(): void;
        identify(identity: string): void;
        track(event: string): void;
        trackWithProperties(event: string, properties: Map<String, String>): void;
        startEVPairing(): void;
        stopEVPairing(): void;
        userId(): string;
        getIdentity(): string;
}
```
