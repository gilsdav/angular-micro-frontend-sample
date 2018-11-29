# MicroFront

## Try app

Execute this scripts in the order:
1) `npm install`
2) `npm run build:elements`
3) `npm start`

## Create new Micro module

* Execute `ng generate application micro-module-name`
* Copy and adapt `/projects/micro-one/build.js` to your new project
* Comment `import 'zone.js/dist/zone';` on `polyfills` of the new project
* Replace `bootstrap` by `entryComponents` into `app.module.ts`
* Copy this code into your `AppModule`
  ```
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('micro-module-name', el);
  }

  ngDoBootstrap() {}
  ``` 
* Add and adapt needed scripts on `package.json`
