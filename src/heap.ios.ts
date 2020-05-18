export class NSHeap {

    private readonly envId: string;
    private readonly options: HeapOptions;
    constructor(envId: string, options?: HeapOptions) {
        this.envId = envId;
        this.options = options;
    }

    initialize(): void {
        console.log(this.envId);
        Heap.initialize(this.envId)
    };

    initializeWithOptions(): void {
        Heap.initializeWithOptions(this.envId, this.options)
    };


    identify(identity: string): void {
        Heap.identify(identity)
    };


    resetIdentity() {
        Heap.resetIdentity()
    };


    track(event: string): void {
        Heap.track(event)
    };


    trackWithProperties(event: string, properties: NSDictionary<any, any>): void {
        Heap.trackWithProperties(event, properties)
    };


    addEventProperties(properties: NSDictionary<any, any>): void {
        Heap.addEventProperties(properties)
    };

    addUserProperties(properties: NSDictionary<any, any>): void {
        Heap.addUserProperties(properties)
    };

    changeInterval(interval: number): void {
        Heap.changeInterval(interval)
    };

    clearEventProperties() : void{
        Heap.clearEventProperties()
    };

    disableVisualizerPairingGesture(): void {
        Heap.disableVisualizerPairingGesture()
    };

    enableVisualizer() : void{
        Heap.enableVisualizer()
    };

    frameworkAutocaptureEventWithSourceWithSourceProperties(
        event: string,
        source: string,
        sourceProperties: NSDictionary<any, any>): void {
        Heap.frameworkAutocaptureEventWithSourceWithSourceProperties(event, source, sourceProperties);
    };

    frameworkTrackWithPropertiesWithSourceWithSourceProperties(event: string, properties: NSDictionary<any, any>, source: string, sourceProperties: NSDictionary<any, any>) {
        Heap.frameworkTrackWithPropertiesWithSourceWithSourceProperties(event, properties, source, sourceProperties)
    };


    libVersion(): string {
        return Heap.libVersion()
    };

    alloc(): Heap {
        return Heap.alloc();
    };

    new(): Heap  {
        return Heap.new();
    };

    removeEventProperty(property: string) {
        Heap.removeEventProperty(property)
    };


    setAppId(newAppId: string) {
        Heap.setAppId(newAppId)
    };

    setEventProperties(properties: NSDictionary<any, any>) {
        Heap.setEventProperties(properties)
    };

    startDebug() {
        Heap.startDebug()
    };

    startEVPairing() {
        Heap.startEVPairing()
    };

    stopDebug() {
        Heap.stopDebug()
    };

    stopEVPairing() {
        Heap.stopEVPairing()
    };



    unsetEventProperty(property: string): void {
        Heap.unsetEventProperty(property)
    };

    userId(): string {
        return Heap.userId();
    }

}
