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

export const postStatus = [
  body('token')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .matches(/[\w]/)
    .withMessage('INVALID_TOKEN'),
];
