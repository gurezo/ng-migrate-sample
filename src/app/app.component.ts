import { Component, ChangeDetectionStrategy } from "@angular/core";


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [],
})
export class AppComponent {
  title = "ng-migrate-sample";
}
