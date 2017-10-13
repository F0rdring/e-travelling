//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//third party
import { NglModule } from 'ng-lightning';
//global functions
import { GlobalFn } from '../global-fn';
//routing module
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
//root component
import { RootComponent } from '../@root/component';
//common components
import { VerificationComponent } from '../pages/verification/component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        NglModule.forRoot()
    ],
    declarations: [
        RootComponent,
        VerificationComponent
    ],
    providers: [
        GlobalFn,
        AuthGuard
    ],
    bootstrap: [
        RootComponent
    ]
})

export class AppModule { }