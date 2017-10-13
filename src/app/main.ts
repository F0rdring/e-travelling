import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system';

import 'static/css/main';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './@main/app.module';

if (process.env.ENV === 'production') enableProdMode();

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);