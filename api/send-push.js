'use strict';
var Promise = require('bluebird'),
    gcm = require('node-gcm');

var gcmSender = new gcm.Sender('AIzaSyBD3vlRxnLPi20SUBxvwRqOFVG2Vv1xYcA');

module.exports = function sendPush(registrationIds){
    return new Promise((resolve, reject) => {
        console.log('Sending messages...');
        var message = new gcm.Message();
        gcmSender.send(message, { registrationTokens: registrationIds }, (err, response) => {
            if (err) {
                console.error(err); 
                return reject(err);
            }
            console.log(response);
            return resolve();
        });
    });
};

