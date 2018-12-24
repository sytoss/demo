var express    = require('express');        
var helloRoutes    = require('./hello-routes');        
var echoRoutes    = require('./echo-routes');        

var router = express.Router();

router.use('/', helloRoutes);
router.use('/post', echoRoutes);

module.exports = router;

