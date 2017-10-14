import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        // if (false) this.router.navigate(['/signin']);
        return true;
    }

    canActivateChild() {
        return this.canActivate();
    }
}