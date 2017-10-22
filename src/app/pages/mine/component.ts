import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../../global-fn';
import { Service } from './service';
import { TipService } from '../../tipService';

declare var wx: any;

@Component({
    selector: 'mine',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [Service, TipService]
})

export class MineComponent implements OnInit, OnChanges {

    gift: string = '2days';
    rest: number = 100;
    number: number = 1;
    numbers: Array<number>;

    constructor(private globalFn: GlobalFn, private service: Service, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() {
        this.setProduct();
    }

    ngOnChanges() { }

    setProduct() {
        let arr = Array.apply(null, { length: this.rest + 1 }).map(Number.call, Number);
        arr.shift();
        this.numbers = arr;
        wx.onMenuShareAppMessage({
            title: 'e驾游送您红包啦！',
            desc: 'e驾游精心挑选的自驾游行程任您挑选',
            link: `${this.globalFn.baseUrl}#/gifts;giftcode=${this.gift}`,
            imgUrl: `${this.globalFn.baseUrl}static/img/logo.jpg`,
            type: 'link',
            dataUrl: '',
            success: function () { },
            cancel: function () { }
        });
    }
}