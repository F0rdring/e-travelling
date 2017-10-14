import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../../global-fn';
import { TipService } from '../../tipService';

@Component({
    selector: 'gifts',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [TipService]
})

export class GiftsComponent implements OnInit, OnChanges {

    gift: string = '1';
    date: string = (new Date().toLocaleDateString()).replace(/\\/g, '-').replace(/\//g, '-');

    constructor(private globalFn: GlobalFn, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() { }

    ngOnChanges() { }

    confirm() {
        this.router.navigate(['../login'], { relativeTo: this.route });
    }
}