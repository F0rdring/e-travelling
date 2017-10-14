import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { VerificationComponent } from '../pages/verification/component';
import { GiftsComponent } from '../pages/gifts/component';
import { LoginComponent } from '../pages/login/component';
import { RegisterComponent } from '../pages/register/component';
import { SucceedComponent } from '../pages/succeed/component';

const routes: Routes = [
    { path: '', redirectTo: 'verification', pathMatch: 'full' },
    { path: 'verification', component: VerificationComponent },
    { path: 'gifts', component: GiftsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'succeed', component: SucceedComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }