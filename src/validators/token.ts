import { body } from 'express-validator';

export const postToken = [
  body('email')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('INVALID_EMAIL'),
];
