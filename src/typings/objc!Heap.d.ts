
declare class Heap extends NSObject {

	static addEventProperties(properties: NSDictionary<any, any>): void;

	static addUserProperties(properties: NSDictionary<any, any>): void;

	static alloc(): Heap; // inherited from NSObject

	static changeInterval(interval: number): void;

	static clearEventProperties(): void;

	static disableVisualizerPairingGesture(): void;

	static enableVisualizer(): void;

	static frameworkAutocaptureEventWithSourceWithSourceProperties(event: string, source: string, sourceProperties: NSDictionary<any, any>): void;

	static frameworkTrackWithPropertiesWithSourceWithSourceProperties(event: string, properties: NSDictionary<any, any>, source: string, sourceProperties: NSDictionary<any, any>): void;

	static identify(identity: string): void;

	static initialize(envId: string): void;

	static initializeWithOptions(envId: string, options: HeapOptions): void;

	static libVersion(): string;

	static new(): Heap; // inherited from NSObject

	static removeEventProperty(property: string): void;

	static resetIdentity(): void;

	static setAppId(newAppId: string): void;

	static setEventProperties(properties: NSDictionary<any, any>): void;

	static startDebug(): void;

	static startEVPairing(): void;

	static stopDebug(): void;

	static stopEVPairing(): void;

	static track(event: string): void;

	static trackWithProperties(event: string, properties: NSDictionary<any, any>): void;

	static unsetEventProperty(property: string): void;

	static userId(): string;
}

declare class HeapOptions extends NSObject {

	static alloc(): HeapOptions; // inherited from NSObject

	static new(): HeapOptions; // inherited from NSObject

	debug: boolean;

	disableAdvertiserIdCapture: boolean;

	disableTextCapture: boolean;

	disableVendorIdCapture: boolean;
}
