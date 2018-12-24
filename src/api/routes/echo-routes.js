var express = require('express');
var echoCtrl = require('../controllers/echo-controller');

const router = express.Router();

router.route('/')
/**
 * @api {post} /post echo the request body
 * @apiName echo body
 * @apiGroup test-api
 *
 * @apiSuccess {String} body The request body
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 Success
 *     [
 *       {
 *          "message": "Hello"
 *       }
 *     ]
 *
 **/
    .post(echoCtrl.echo);

module.exports = router;