var firebase = require('firebase'),
    gcm = require('node-gcm');
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB8WuTqgMcZGjKPH8fr9-c1xk2TVKOQrSM",
    authDomain: "mobiledevbh-push.firebaseapp.com",
    databaseURL: "https://mobiledevbh-push.firebaseio.com",
    storageBucket: "mobiledevbh-push.appspot.com",
};
firebase.initializeApp(config);

var gcmSender = new gcm.Sender('AIzaSyBD3vlRxnLPi20SUBxvwRqOFVG2Vv1xYcA');

firebase.database().ref('/').once('value').then((snapshot) => {
    var firebaseData = snapshot.val();
    var registrationIds = []; 
    for(var key in firebaseData){
        registrationIds.push(key);
    }

    var message = new gcm.Message({
        data: { title: 'Teste de Push' }
    });

    gcmSender.send(message, { registrationTokens: registrationIds }, (err, response) => {
        if (err) return console.error(err);
        return console.log(response);
    });
});