import jwt from 'jwt-simple';
import config from '../config';

export const generateToken = (email: string): string => {
  return jwt.encode({ email }, config.secret);
};
