import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutedApp } from 'meta-spa-router';
import { InjectionToken } from '@angular/core';

export const ROUTED_APP = new InjectionToken<RoutedApp>('ROUTED_APP');

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
  providers: [{ provide: ROUTED_APP, useFactory: () => new RoutedApp() }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
