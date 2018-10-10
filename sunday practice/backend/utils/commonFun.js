module.exports.sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}
module.exports.callBack=(err, user) => {
    if (err) commonFn.sendRes(res, false, "User can't be created");
    else commonFn.sendRes(res, true,
        "User Created, UserID: " + user._id);
    }
   
 