const express = require('express');
const Contacts = require('../models/contacts');
const Functions = require('../utils/commonFun');
const router = express.Router();

router.post("/", (req, res) => {
    Contacts.create(req.body, (err, user) => {
        if (err) Functions.sendRes(res, false, "User can't be created");
        else Functions.sendRes(res, true,
            "User Created, UserID: " + user._id);
        }
       )
});

module.exports = router;