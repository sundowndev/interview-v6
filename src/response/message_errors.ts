import logger from '../utils/logger';

// tslint:disable:no-console
export const errorApi = (err: string | any) => {
  if (process.env.NODE_ENV !== 'test') {
    logger.error(err);
  }

  return {
    status: 500,
    message: 'An internal error occured.',
  };
};

export const formatResponse = (res: string) => {
  return { status: 400, message: res };
};

export const validationError = (errors: any[] = []) => {
  return { status: 400, message: 'Validation error.', errors };
};

export const tokenAlreadyExists = () => {
  return { status: 401, message: 'A token already exists for this email.' };
};

export const tokenNotFound = () => {
  return { status: 401, message: 'Token not found.' };
};

export const quotaError = () => {
  return {
    status: 402,
    message: 'You reached words quota limit for today (80k).',
  };
};
