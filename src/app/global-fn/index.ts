import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GlobalFn {

    baseUrl = 'http://haoyangtx.mynatapp.cc/';

    constructor(private router: Router) { }

    handleRes(res: Response) {
        return res.json();
    }

    handleError(error: Response) {
        return Observable.throw(error);
    }
}
