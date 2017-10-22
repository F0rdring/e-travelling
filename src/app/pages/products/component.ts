import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../../global-fn';
import { Service } from './service';
import { TipService } from '../../tipService';

@Component({
    selector: 'products',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [Service, TipService]
})

export class ProductsComponent implements OnInit, OnChanges {

    gift: string = '1';
    number: number;
    open: boolean = false;

    constructor(private globalFn: GlobalFn, private service: Service, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() { }

    ngOnChanges() { }

    showDetail(value?: any) {
        this.open = true;
        console.log(value);
    }

    purchase() {
        this.router.navigate(['../purchase'], { relativeTo: this.route });
    }

    mine() {
        this.router.navigate(['../mine'], { relativeTo: this.route });
    }
}