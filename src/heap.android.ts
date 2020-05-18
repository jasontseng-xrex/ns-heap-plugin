import * as application from 'tns-core-modules/application';
import * as utils from "tns-core-modules/utils/utils";
let context = application.android.context;
declare var cn: any;

declare const com: any;
declare const android: any;

export class NSHeap {

    private readonly envId: string;
    private readonly debugMode: boolean;
    private Heap = com.heapanalytics.android.Heap;

    constructor(envId: string, debugMode?: boolean) {
        this.envId = envId;
        this.debugMode = debugMode ? debugMode: false;
    }

    initialize(): void {
        this.Heap.init(utils.ad.getApplicationContext(), this.envId, this.debugMode);
    };


    identify(identity: string): void {
        this.Heap.identify(identity);
    };


    track(event: string): void {
        this.Heap.track(event);
    };

    trackWithProperties(event: string, properties: Map<String, String>): void {
        this.Heap.track(event, properties);
    };


    startEVPairing(): void {
        this.Heap.startEVPairing();
    };

    stopEVPairing(): void {
        this.Heap.stopEVPairing();
    };

    userId(): string {
        return this.Heap.getUserId();
    }

    getIdentity(): string {
        return this.Heap.getIdentity();
    }

}


