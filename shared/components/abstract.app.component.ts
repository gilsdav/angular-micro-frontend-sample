import { Router, NavigationEnd } from '@angular/router';
import { EventEmitter } from 'events';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

export abstract class AbstractAppComponent {

    private routerEventSubscription: Subscription;
    protected abstract baseAppUrl: string;
    protected sharedRouter: {
        currentRoute: string,
        routeChanged: EventEmitter,
        changeRoute: (route) => void
      } = window['sharedRouter'];


    constructor (protected router: Router) {
    }

    protected initRoutedApp() {
        if (this.baseAppUrl) {
            console.log('micro current route', this.sharedRouter.currentRoute);
            this.router.navigateByUrl( this.sharedRouter.currentRoute);
            this.routerEventSubscription = this.router.events.pipe(
              filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
                this.sharedRouter.changeRoute(e.url);
                console.log('nav end', e.url, e.urlAfterRedirects);
              }
            );
            this.sharedRouter.routeChanged.on('routeChanged', this.adaptUrl);
        } else {
            console.error('Please set "baseAppUrl" before calling initRoutedApp()');
        }
      }

      private adaptUrl = (url: string) => {
        if (url.startsWith(this.baseAppUrl)) {
          this.router.navigateByUrl(url);
        }
      }

      protected destroyRoutedApp() {
        if (this.routerEventSubscription) {
          this.routerEventSubscription.unsubscribe();
        }
        this.sharedRouter.routeChanged.removeListener('routeChanged', this.adaptUrl);
      }

}
