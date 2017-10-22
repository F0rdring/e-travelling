import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../../global-fn';
import { TipService } from '../../tipService';

@Component({
    selector: 'login',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [TipService]
})

export class LoginComponent implements OnInit, OnChanges {

    cellNumber: number;
    cellCode: number;
    giftcode: string;

    constructor(private globalFn: GlobalFn, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            alert(params.giftcode);
            this.giftcode = params.giftcode;
        });
    }

    ngOnChanges() { }

    getCellCode() {
        alert('已将验证短信发送至您的手机上！');
    }

    login() {
        this.router.navigate(['../succeed', { giftcode: this.giftcode }], { relativeTo: this.route });
    }
}