import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { EntloginComponent } from '../pages/entlogin/component';
import { ProductsComponent } from '../pages/products/component';
import { MineComponent } from '../pages/mine/component';
import { GiftsComponent } from '../pages/gifts/component';
import { LoginComponent } from '../pages/login/component';
import { SucceedComponent } from '../pages/succeed/component';
import { ErrorComponent } from '../pages/error/component';

const routes: Routes = [
    { path: '', redirectTo: 'entlogin', pathMatch: 'full' },
    { path: 'entlogin', component: EntloginComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'mine', component: MineComponent },
    { path: 'gifts', component: GiftsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'succeed', component: SucceedComponent },
    { path: 'error', component: ErrorComponent }
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