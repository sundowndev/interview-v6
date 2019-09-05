import express, { Router } from 'express';
import * as controller from '../controllers/token';
import VALIDATION_MIDDLEWARE from '../middlewares/validation';
import * as validators from '../validators/token';

const router: Router = express.Router();

/**
 * @api {POST} /api/token Get a token
 * @apiName GetToken
 * @apiGroup Token
 *
 * @apiParam {String} email Email to register
 *
 * @apiSuccess {Boolean} success Request status
 * @apiSuccess {Array} item  Result item.
 */
router
  .route('/token')
  .post(validators.postToken, VALIDATION_MIDDLEWARE, controller.postAuth);

/**
 * @api {POST} /api/token/status Get token status
 * @apiName GetTokenStatus
 * @apiGroup Token
 *
 * @apiBody {String} token Token to find
 *
 * @apiSuccess {Boolean} success Request status
 * @apiSuccess {Array} item  Result item.
 */
router
  .route('/token/status')
  .post(validators.postStatus, VALIDATION_MIDDLEWARE, controller.postStatus);

export default router;
