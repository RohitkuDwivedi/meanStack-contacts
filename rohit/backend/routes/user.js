const express = require('express');
const Contacts = require('../models/contacts');
const Functions = require('../utils/commonFun');
const router = express.Router();

router.post("/", (req, res) => {
    Contacts.create(req.body, (err, user) => {
        if (err) Functions.sendRes(res, false, "User can't be created");
        else Functions.sendRes(res, true,
            "User Created, UserID: " + user._id);
    })
    res.send("");
});
router.post("/authenticate", (req, res) => {
    console.log(req.body);

    Contacts.authenticate(req.body, (err, user) => {
        console.log(user);

        if (err || user == "" ||!user) Functions.sendRes(res, false, "User and password do not match");
        else {
            let sendUser = {
                Name: user.Name,
                UserName: user.UserName,
                _id: user._id
            };
            Functions.sendRes(res, true, sendUser)
        }
        res.send("123");
    })
});
module.exports = router;