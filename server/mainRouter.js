var router = require('express').Router();
var path = require('path');
var fs = require('fs');
var superagent = require('superagent');
var schedule = require('node-schedule');

var url = 'http://haoyangtx.mynatapp.cc/';

var rule = new schedule.RecurrenceRule();
rule.hour = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
rule.minute = 0;

var j = schedule.scheduleJob(rule, function () {
    getConfig();
});

var getConfig = function (res) {
    global._timestamp = Date.parse(new Date()) / 1000;
    global._nonceStr = 'e1eg@nce';
    global._url = url;
    superagent.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxaa952ed06fe5fb6d&secret=61dd2703435743c135a35a9f42cff6aa')
        .end(function (err, resp) {
            global._access_token = resp.body.access_token;
            superagent.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + global._access_token + '&type=jsapi')
                .end(function (err, respo) {
                    global._ticket = respo.body.ticket;
                    var string1 = 'jsapi_ticket=' + global._ticket + '&noncestr=' + global._nonceStr + '&timestamp=' + global._timestamp + '&url=' + global._url;
                    var sha1 = require('crypto').createHash('sha1');
                    sha1.update(string1);
                    global._config = {
                        debug: true,
                        appId: 'wxaa952ed06fe5fb6d',
                        timestamp: global._timestamp,
                        nonceStr: global._nonceStr,
                        signature: sha1.digest('hex'),
                        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems']
                    };
                    if (res) res.send({ config: global._config, ticket: global._ticket, access_token: global._access_token });
                });
        });
}

router.get('/signature', function (req, res, next) {
    if (global._config) {
        res.send({ config: global._config, ticket: global._ticket, access_token: global._access_token });
    } else { getConfig(res); }
});

module.exports = router;