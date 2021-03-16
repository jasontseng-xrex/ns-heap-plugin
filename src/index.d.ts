/// <reference types="tns-platform-declarations/ios" />
export declare class NSHeap extends Common {
	static initialize(envId: string): void;
	static addEventProperties(properties: NSDictionary<any, any>): void;
	static addUserProperties(properties: NSDictionary<any, any>): void;
	static changeInterval(interval: number): void;
	static clearEventProperties(): void;
	static disableVisualizerPairingGesture(): void;
	static enableVisualizer(): void;
	static frameworkAutocaptureEventWithSourceWithSourceProperties(
		event: string,
		source: string,
		sourceProperties: NSDictionary<any, any>
	): void;
	static frameworkTrackWithPropertiesWithSourceWithSourceProperties(
		event: string,
		properties: NSDictionary<any, any>,
		source: string,
		sourceProperties: NSDictionary<any, any>
	): void;
	static identify(identity: string): void;
	static libVersion(): string;
	static removeEventProperty(property: string): void;
	static resetIdentity(): void;
	static setAppId(newAppId: string): void;
	static setEventProperties(properties: NSDictionary<any, any>): void;
	static startDebug(): void;
	static startEVPairing(): void;
	static stopDebug(): void;
	static stopEVPairing(): void;
	static track(event: string): void;
	static trackWithProperties(
		event: string,
		properties: NSDictionary<any, any>
	): void;
	static unsetEventProperty(property: string): void;
	static userId(): string;
}
