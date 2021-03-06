import express, { Router } from 'express';
import * as controller from '../controllers/text';
import { verifyToken } from '../controllers/token';
import VALIDATION_MIDDLEWARE from '../middlewares/validation';
import * as validators from '../validators/text';

const router: Router = express.Router();

/**
 * @api {POST} /api/justify Justify a text
 * @apiName JustifyText
 * @apiGroup Text
 *
 * @apiParam {String} text Input text to justify
 *
 * @apiSuccess {Boolean} success Request status
 * @apiSuccess {Array} item  Result item.
 */
router
  .route('/justify')
  .post(
    validators.postJustify,
    verifyToken,
    VALIDATION_MIDDLEWARE,
    controller.postJustify,
  );

export default router;
