exports.hello = function (req, res, next) {
    return res.send('Hello');
}

exports.helloSlug = function (req, res, next) {
    return res.send('Hello ' + req.params.slug);
}


