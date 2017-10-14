import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../../global-fn';
import { TipService } from '../../tipService';

@Component({
    selector: 'register',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [TipService]
})

export class RegisterComponent implements OnInit, OnChanges {

    constructor(private globalFn: GlobalFn, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() { }

    ngOnChanges() { }

    register() {
        this.router.navigate(['../succeed'], { relativeTo: this.route });
    }

    login() {
        this.router.navigate(['../login'], { relativeTo: this.route });
    }
}