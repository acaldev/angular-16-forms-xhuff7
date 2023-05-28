import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BetterFormModule } from './better-form/better-form.module';
import { TranslocoRootModule } from './transloco-root.module';
import { UglyFormModule } from './ugly-form/ugly-form.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    BetterFormModule,
    UglyFormModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
