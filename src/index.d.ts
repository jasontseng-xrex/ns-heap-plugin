/// <reference types="tns-platform-declarations/ios" />
export declare class NSHeap {
    private readonly envId;
    private readonly options;
    constructor(envId: string, options?: HeapOptions);
    initialize(): void;
    initializeWithOptions(): void;
    addEventProperties(properties: NSDictionary<any, any>): void;
    addUserProperties(properties: NSDictionary<any, any>): void;
    changeInterval(interval: number): void;
    clearEventProperties(): void;
    disableVisualizerPairingGesture(): void;
    enableVisualizer(): void;
    frameworkAutocaptureEventWithSourceWithSourceProperties(event: string, source: string, sourceProperties: NSDictionary<any, any>): void;
    frameworkTrackWithPropertiesWithSourceWithSourceProperties(event: string, properties: NSDictionary<any, any>, source: string, sourceProperties: NSDictionary<any, any>): void;
    identify(identity: string): void;
    libVersion(): string;
    alloc(): Heap;
    new(): Heap;
    removeEventProperty(property: string): void;
    resetIdentity(): void;
    setAppId(newAppId: string): void;
    setEventProperties(properties: NSDictionary<any, any>): void;
    startDebug(): void;
    startEVPairing(): void;
    stopDebug(): void;
    stopEVPairing(): void;
    track(event: string): void;
    trackWithProperties(event: string, properties: NSDictionary<any, any>): void;
    unsetEventProperty(property: string): void;
    userId(): string;
}
