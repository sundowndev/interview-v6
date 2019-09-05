import { body } from 'express-validator';

export const postJustify = [
  body('text')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
];
