import { Common } from "./heap.common";

declare const Heap: any;

export class NSHeap extends Common {
	constructor() {
		super();
	}

	static initialize(envId: string): void {
		if (envId) {
			if (Heap) {
				Heap.initialize(envId);
			} else {
				console.log(
					"HEAP PLUGIN: We can not find the cocoapod, make sure is added during building"
				);
			}
		} else {
			console.log("HEAP PLUGIN: You need to pass some envId to init");
		}
	}

	static identify(identity: string): void {
		Heap.identify(identity);
	}

	static resetIdentity() {
		Heap.resetIdentity();
	}

	static track(event: string): void {
		Heap.track(event);
	}

	static trackWithProperties(
		event: string,
		properties: NSDictionary<any, any>
	): void {
		Heap.trackWithProperties(event, properties);
	}

	static addEventProperties(properties: NSDictionary<any, any>): void {
		Heap.addEventProperties(properties);
	}

	static addUserProperties(properties: NSDictionary<any, any>): void {
		Heap.addUserProperties(properties);
	}

	static changeInterval(interval: number): void {
		Heap.changeInterval(interval);
	}

	static clearEventProperties(): void {
		Heap.clearEventProperties();
	}

	static disableVisualizerPairingGesture(): void {
		Heap.disableVisualizerPairingGesture();
	}

	static enableVisualizer(): void {
		Heap.enableVisualizer();
	}

	static frameworkAutocaptureEventWithSourceWithSourceProperties(
		event: string,
		source: string,
		sourceProperties: NSDictionary<any, any>
	): void {
		Heap.frameworkAutocaptureEventWithSourceWithSourceProperties(
			event,
			source,
			sourceProperties
		);
	}

	static frameworkTrackWithPropertiesWithSourceWithSourceProperties(
		event: string,
		properties: NSDictionary<any, any>,
		source: string,
		sourceProperties: NSDictionary<any, any>
	) {
		Heap.frameworkTrackWithPropertiesWithSourceWithSourceProperties(
			event,
			properties,
			source,
			sourceProperties
		);
	}

	static libVersion(): string {
		return Heap.libVersion();
	}

	static removeEventProperty(property: string) {
		Heap.removeEventProperty(property);
	}

	static setAppId(newAppId: string) {
		Heap.setAppId(newAppId);
	}

	static setEventProperties(properties: NSDictionary<any, any>) {
		Heap.setEventProperties(properties);
	}

	static startDebug() {
		Heap.startDebug();
	}

	static startEVPairing() {
		Heap.startEVPairing();
	}

	static stopDebug() {
		Heap.stopDebug();
	}

	static stopEVPairing() {
		Heap.stopEVPairing();
	}

	static unsetEventProperty(property: string): void {
		Heap.unsetEventProperty(property);
	}

	static userId(): string {
		return Heap.userId();
	}
}
