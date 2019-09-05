import { Request, Response } from 'express';
import * as msg from '../response/message_errors';

/**
 * POST /api/justify
 * Justify text.
 */
export const postJustify = async (req: Request, _: Response, next: any) => {
  try {
    req.app.locals.plain = true;
    req.app.locals.return = 'text';

    return next();
  } catch (e) {
    return next(msg.errorApi(e));
  }
};
