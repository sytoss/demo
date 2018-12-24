var express = require('express');
var helloCtrl = require('../controllers/hello-controller');

const router = express.Router();

router.route('/')
/**
 * @api {get} / echo "Hello"
 * @apiName sayHello
 * @apiGroup test-api
 *
 * @apiSuccess {String} body The hello message
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 Success
 *     [
 *       Hello
 *     ]
 *
 **/
    .get(helloCtrl.hello);

/**
 * @api {get} /hello/:slug echo "Hello {slug}"
 * @apiName helloSLug
 * @apiGroup test-api
 *
 * @apiParam {String} slug The name
 *
 * @apiSuccess {String} body The hello message
 *
 * @apiSuccessExample Success Response:
 *     HTTP/1.1 200 Success
 *     [
 *       Hello World
 *     ]
 *
 **/
router.route('/hello/:slug').get(helloCtrl.helloSlug);

module.exports = router;