import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractAppComponent } from 'shared/components/abstract.app.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-micro-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AbstractAppComponent implements OnInit, OnDestroy {
  title = 'micro-one';

  baseAppUrl: string;

  constructor(protected router: Router) {
    super(router);
    this.baseAppUrl = `/${environment.baseAppUrl}`;
  }

  ngOnInit() {
    console.log('micro 1 init');
    this.initRoutedApp();
  }

  ngOnDestroy() {
    this.destroyRoutedApp();
    console.log('micro 1 destroyed');
  }

}
