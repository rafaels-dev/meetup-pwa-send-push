var firebase = require('firebase'),
    Promise = require('bluebird');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB8WuTqgMcZGjKPH8fr9-c1xk2TVKOQrSM",
    authDomain: "mobiledevbh-push.firebaseapp.com",
    databaseURL: "https://mobiledevbh-push.firebaseio.com",
    storageBucket: "mobiledevbh-push.appspot.com",
};
firebase.initializeApp(config);

module.exports = function getRegistrationIds() {
    return new Promise((resolve, reject) => {
        firebase.database().ref('/').once('value').then((snapshot) => {
            var firebaseData = snapshot.val();
            var registrationIds = [];
            for (var key in firebaseData) {
                registrationIds.push(key);
            }
            return resolve(registrationIds);
        }).catch((err) => {
            console.error(err);
            return reject(err);
        });
    });
};