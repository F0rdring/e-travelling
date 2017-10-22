import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalFn } from '../global-fn';
import { Service } from './service';
import { TipService } from '../tipService';

declare var wx: any;

@Component({
    selector: 'view',
    template: require('./template.html'),
    styles: [require('./style.css')],
    providers: [Service, TipService]
})

export class RootComponent implements OnInit, OnChanges {

    constructor(private globalFn: GlobalFn, private service: Service, private route: ActivatedRoute, private router: Router, private tipService: TipService) { }

    ngOnInit() {
        this.service.signature().subscribe(
            res => {
                console.log(res);
                wx.config(res.config);
                let title: string;
                let desc: string;
                let link: string;
                if (location.href.indexOf('giftcode') > -1) {
                    title = 'e驾游送您红包啦！';
                    desc = 'e驾游精心挑选的自驾游行程任您挑选';
                    link = location.href;
                } else {
                    title = 'e驾游';
                    desc = 'e驾游产品中心';
                    link = this.globalFn.baseUrl;
                }
                wx.ready(() => {
                    wx.onMenuShareAppMessage({
                        title: title,
                        desc: desc,
                        link: link,
                        imgUrl: `${this.globalFn.baseUrl}static/img/logo.jpg`,
                        type: 'link',
                        dataUrl: '',
                        success: function () { },
                        cancel: function () { }
                    });
                    wx.hideMenuItems({
                        menuList: ['menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:favorite', 'menuItem:share:facebook', 'menuItem:share:QZone', 'menuItem:editTag', 'menuItem:delete', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:readMode', 'menuItem:openWithQQBrowser', 'menuItem:openWithSafari', 'menuItem:share:email', 'menuItem:share:brand']
                    });
                });
                wx.error((resp: any) => { console.log(resp); });
            },
            error => { },
            () => { }
        );
    }

    ngOnChanges() { }
}