module.exports.sendRes = (res, success, msg) => {
    res.json({
        success: success,
        msg: msg
    });
}
