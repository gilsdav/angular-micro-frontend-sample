import { Component, OnInit, AfterViewInit } from '@angular/core';

import { MetaRouter, MetaRoute } from 'meta-spa-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'micro-front';

  private router: MetaRouter;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const config: MetaRoute[] = [
      {
          path: 'one',
          app: '/elements/one',
          outlet: 'outlet'
      },
      {
          path: 'two',
          app: '/elements/two',
          outlet: 'outlet'
      }
    ];
    const router = new MetaRouter();
    router.config(config);
    router.init();
    router.preload();
    this.router = router;
  }

  public navigate(appName: string): void {
    this.router.go(appName, 'home');
  }

}
