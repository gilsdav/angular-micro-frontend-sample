import { Component, AfterViewInit, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { EventEmitter } from 'events';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'micro-front';
  toShow: SafeHtml = '';

  private sharedRouter = window['sharedRouter'] = {
    currentRoute: null,
    routeChanged: new EventEmitter,
    changeRoute: function(route) {
      this.currentRoute = route;
      this.routeChanged.emit('routeChanged', route);
    }
  };

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    // this.sharedRouter.routeChanged.on('routeChanged', (rout) => { console.log('route', rout); });
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // change url params here
          console.log('route changed', event.url);

          if (event.url.startsWith('/one')) {
            this.toggleMicroOne();
          } else if (event.url.startsWith('/two')) {
            this.toggleMicroTwo();
          }
        }
      });
      this.initRoutedApp();
  }

  private initRoutedApp() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      // setTimeout(() => {
        this.sharedRouter.changeRoute(e.url);
      // }, 2000);
    });
    this.sharedRouter.routeChanged.on('routeChanged', url => this.router.navigateByUrl(url));
  }

  private loadScript(url: string): void {
    if (document.querySelectorAll(`script[src='${url}']`).length === 0) {
      const script = document.createElement('script');
      script.onload = function () {
          // do stuff with the script
      };
      script.src = url;
      document.head.appendChild(script);
    }
  }

  public toggleMicroOne() {
    if (!this.toShow || !(this.toShow as any).changingThisBreaksApplicationSecurity.startsWith('<micro-one>')) {
      this.loadScript('elements/micro-one.js');
      this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<micro-one>
      <div class="loader-05"></div>
      </micro-one>`);
    }
    // } else {
    //   this.toShow = '';
    // }
  }

  public toggleMicroTwo() {
    if (!this.toShow || !(this.toShow as any).changingThisBreaksApplicationSecurity.startsWith('<micro-two>')) {
      this.loadScript('elements/micro-two.js');
      this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<micro-two>
      <div class="loader-05"></div>
      </micro-two>`);
    }
    // } else {
    //   this.toShow = '';
    // }
  }

}
