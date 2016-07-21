'use strict';
var getRegistrationIds = require('./get-registration-ids'),
    sendPush = require('./send-push');

module.exports = function(app){
    app.get('/sendPush', (req, res) => {
        getRegistrationIds()
            .then(sendPush)
            .then(function(){
                return res.status(200)
                    .send('Pushes enviados com sucesso!')
                    .end();
            });
    });
};