import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CoucouComponent } from './components/coucou/coucou.component';
import { AppRoutingModule } from './app-routing.module';
import { BlankComponent } from 'shared/components/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    CoucouComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    if (!customElements.get('micro-one')) {
      customElements.define('micro-one', el);
    }
  }

  ngDoBootstrap() {}

}
