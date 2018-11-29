import { Component, AfterViewInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-front';

  toShow: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {
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
    // if (!this.toShow) {
      this.loadScript('elements/micro-one.js');
      this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<micro-one>
      <div class="loader-05"></div>
      </micro-one>`);
    // } else {
    //   this.toShow = '';
    // }
  }

  public toggleMicroTwo() {
    // if (!this.toShow) {
      this.loadScript('elements/micro-two.js');
      this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<micro-two>
      <div class="loader-05"></div>
      </micro-two>`);
    // } else {
    //   this.toShow = '';
    // }
  }

}
