const admin = require('firebase-admin');
const serviceAccount = require('../kendo-nilex-firebase-adminsdk-az2qm-94a5dc31c6.json');

const express = require('express');
const router = express.Router();



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://kendo-nilex.firebaseio.com"
});

router.get('/:user', (req, res) => {
    let dataToSend = [];
    const db = admin.database();
    const bookDB = db.ref(`${req.params.user}/books`);
    bookDB.once('value', snapshot => {
        dataToSend.push(snapshot.val());
        res.json(dataToSend);
    }, error => {
        console.log(error.code);
    });
})

module.exports = router;