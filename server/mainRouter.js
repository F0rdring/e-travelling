var router = require('express').Router();
var path = require('path');
var fs = require('fs');
var superagent = require('superagent');

router.post('/data', function (req, res, next) {
    var resp = {};
    travel(path.resolve(__dirname, './data'), function (res) {
        Object.assign(resp, res);
    });
    res.send(resp);
});

router.get('./sse', function (req, res, next) {
    var query = req.query;
    var interval = setInterval(function () {
        var sreq = superagent.get(query['url'])
            .end(function (err, resp) {
                if (err) clearInterval(interval);
                var text = err ? err.response.text : resp.text;
                res.write('data: ' + text + '\n\n');
            });
    }, 10000);
});

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file, index, array) {
        var pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            let res = {};
            var name = pathname.replace(/\\/g, '-').replace(/\//g, '-').split('-').pop();
            if (name.indexOf('txt') > 0 && name.split('.')[0].length > 0) es[name.split('.')[0]] = fs.readFileSync(pathname, 'utf-8');
            callback(res);
        }
    });
}

module.exports = router;