import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { environment } from '../environments/environment';
import { ROUTED_APP } from './app.module';
import { RoutedApp } from 'meta-spa-router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'micro-one';

  baseAppUrl: string;

  constructor(protected router: Router, @Inject(ROUTED_APP) private routedApp: RoutedApp) {
    // this.baseAppUrl = `/${environment.baseAppUrl}`;
    this.initRoutedApp();
  }

  ngOnInit() {
    console.log('micro 1 init');
  }

  ngOnDestroy() {
    console.log('micro 1 destroyed');
  }

  private initRoutedApp() {

    this.routedApp.config({ appId: 'one' });
    this.routedApp.init();

    // this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe((e: NavigationStart) => {
    //   console.log('nav start', e.url);
    //   e.url = e.url.replace('/#/', '/');
    // });

    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      console.log('send route', e.url);
      if (e.url.startsWith('/#/')) {
        e.url = e.url.replace('/#/', '/');
        this.router.navigateByUrl(e.url);
      } else {
        this.routedApp.sendRoute(e.url);
      }
    });

    this.routedApp.registerForRouteChange(url => {
      console.log('url changed', url);
      this.router.navigateByUrl(url);
    });
  }

}
