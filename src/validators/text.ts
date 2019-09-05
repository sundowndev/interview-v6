import { body } from 'express-validator';

export const postJustify = [
  body('text')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  body('token')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .matches(/[\w]/)
    .withMessage('INVALID_TOKEN'),
];
