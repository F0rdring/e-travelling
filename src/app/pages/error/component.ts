import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../../global-fn';
import { TipService } from '../../tipService';

@Component({
    selector: 'error',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [TipService]
})

export class ErrorComponent implements OnInit, OnChanges {

    giftcode: string;

    constructor(private globalFn: GlobalFn, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            alert(params.giftcode);
            this.giftcode = params.giftcode;
        });
    }

    ngOnChanges() { }
}