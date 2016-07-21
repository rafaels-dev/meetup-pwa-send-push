var express = require('express'),
    api = require('./api');

var app = express();
api(app);

var port = process.env.PORT || 8000;
app.listen(process.env.PORT || 8000, () => {
    console.log('Listening on port: ', port);
});