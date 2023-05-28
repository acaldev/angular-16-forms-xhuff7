import { Component } from "@angular/core";
import { TranslocoHttpLoader } from "./transloco-root.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  constructor(private translocoHttpLoader: TranslocoHttpLoader){
    this.translocoHttpLoader.getTranslation('en');
  }
}
