import { body } from 'express-validator';
import config from '../config';
import { countWords } from '../utils/text';

export const postJustify = [
  body('text')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .custom(value => {
      if (countWords(value) > config.dailyQuota) {
        throw new Error(
          `Text must be shorter than ${config.dailyQuota} characters.`,
        );
      }

      return true;
    }),
  body('token')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .matches(/[\w]/)
    .withMessage('INVALID_TOKEN'),
];
