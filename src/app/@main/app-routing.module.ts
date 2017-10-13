import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { VerificationComponent } from '../pages/verification/component';

const routes: Routes = [
    { path: '', redirectTo: 'verification', pathMatch: 'full' },
    { path: 'verification', component: VerificationComponent }
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