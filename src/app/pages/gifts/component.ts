import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../../global-fn';
import { Service } from './service';
import { TipService } from '../../tipService';

@Component({
    selector: 'gifts',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [Service, TipService]
})

export class GiftsComponent implements OnInit, OnChanges {

    gift: string = '1';
    date: string = (new Date().toLocaleDateString()).replace(/\\/g, '-').replace(/\//g, '-');
    open: boolean = true;
    giftcode: string;

    constructor(private globalFn: GlobalFn, private service: Service, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            alert(params.giftcode);
            this.giftcode = params.giftcode;
        });
    }

    ngOnChanges() { }

    showDetail() {
        this.open = true;
    }

    confirm() {
        this.router.navigate(['../login', { giftcode: this.giftcode }], { relativeTo: this.route });
    }
}