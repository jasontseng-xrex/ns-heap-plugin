import { Component, OnInit } from "@angular/core";
// import { NSHeap } from "nativescript-heap-plugin";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    // private heap: NSHeap;

    constructor() {
        // Use the component constructor to inject providers.
        // this.heap = new NSHeap("2087918253"); // ChangeMe
    }

    ngOnInit(): void {
        // Init your component properties here.
        // this.heap.initialize();
        // this.heap.startEVPairing();
    }
}
