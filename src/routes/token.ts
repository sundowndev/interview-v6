import express, { Router } from 'express';
import * as controller from '../controllers/token';
import VALIDATION_MIDDLEWARE from '../middlewares/validation';
import * as validators from '../validators/token';

const router: Router = express.Router();

/**
 * @api {POST} /api/auth Get a token
 * @apiName GetToken
 * @apiGroup Token
 *
 * @apiParam {String} email Email to register
 *
 * @apiSuccess {Boolean} success Request status
 * @apiSuccess {Array} item  Result item.
 */
router
  .route('/')
  .post(
    validators.postToken,
    VALIDATION_MIDDLEWARE,
    controller.postAuth,
  );

export default router;
