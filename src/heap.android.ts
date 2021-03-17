import * as utils from "tns-core-modules/utils/utils";
import { Common } from "./heap.common";

declare const com: any;

export class NSHeap extends Common {
	constructor() {
		super();
		com.heapanalytics.android.internal.HeapImpl.skipInstrumentorChecks = true;
	}

	static initialize(envId: string): void {
		if (envId) {
			if (com.heapanalytics.android.Heap) {
				com.heapanalytics.android.Heap.init(
					utils.ad.getApplicationContext(),
					envId
				);
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
		com.heapanalytics.android.Heap.identify(identity);
	}

	static addUserProperties(
		properties: java.util.HashMap<String, String>
	): void {
		com.heapanalytics.android.Heap.addUserProperties(properties);
	}

	static resetIdentity() {
		com.heapanalytics.android.Heap.resetIdentity();
	}

	static track(event: string): void {
		com.heapanalytics.android.Heap.track(event);
	}

	static trackWithProperties(
		event: string,
		properties: java.util.HashMap<String, String>
	): void {
		com.heapanalytics.android.Heap.track(event, properties);
	}

	static startEVPairing(): void {
		com.heapanalytics.android.Heap.startEVPairing();
	}

	static stopEVPairing(): void {
		com.heapanalytics.android.Heap.stopEVPairing();
	}

	static userId(): string {
		return com.heapanalytics.android.Heap.getUserId();
	}

	static getIdentity(): string {
		return com.heapanalytics.android.Heap.getIdentity();
	}
}
