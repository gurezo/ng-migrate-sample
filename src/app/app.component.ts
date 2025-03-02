import { Component } from "@angular/core";
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from "@angular/common";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    imports: [
        NgSwitch,
        NgSwitchDefault,
        NgSwitchCase,
    ],
})
export class AppComponent {
  title = "ng-migrate-sample";
}
