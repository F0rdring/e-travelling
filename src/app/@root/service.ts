import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalFn } from '../global-fn';

@Injectable()
export class Service {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private globalFn: GlobalFn, private http: Http) { }

    signature(): Observable<any> {
        return this.http.get('/signature', this.options)
            .map(this.globalFn.handleRes)
            .catch(this.globalFn.handleError);
    }
}