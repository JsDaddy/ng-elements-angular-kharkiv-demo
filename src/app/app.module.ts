import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { MyWiggetComponent } from './my-wigget/my-wigget.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyWiggetComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
  ],
  providers: [],
  entryComponents: [ MyWiggetComponent, SnackBarComponent ],
  bootstrap: environment.ngElement ? [] : [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const customElement = createCustomElement(MyWiggetComponent, { injector: this.injector });
    customElements.define('my-widget', customElement);

    const snackBarCustomElement = createCustomElement(SnackBarComponent, { injector: this.injector });
    customElements.define('snack-bar', snackBarCustomElement);
  }
}
