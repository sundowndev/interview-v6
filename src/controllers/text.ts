import { Request, Response } from 'express';
import { getMongoManager } from 'typeorm';
import * as msg from '../response/message_errors';
import { countWords, justify } from '../utils/text';

/**
 * POST /api/justify
 * Justify text.
 */
export const postJustify = async (req: Request, _: Response, next: any) => {
  try {
    const justifiedText = justify(req.body.text, 80);
    const newQuota = req.app.locals.token.quota - countWords(justifiedText);

    const manager = getMongoManager();

    req.app.locals.token.updateDate();
    req.app.locals.token.quota = newQuota;

    await manager.save(req.app.locals.token);

    req.app.locals.plain = true;
    req.app.locals.return = justifiedText;

    return next();
  } catch (e) {
    return next(msg.errorApi(e));
  }
};
