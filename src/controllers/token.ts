import { Request, Response } from 'express';
import { getMongoManager, getMongoRepository } from 'typeorm';
import { Token } from '../entity/Token';
import * as msg from '../response/message_errors';
import { countWords } from '../utils/text';
import { generateToken } from '../utils/token';

/**
 * POST /api/token
 * Get a token.
 */
export const postAuth = async (req: Request, _: Response, next: any) => {
  try {
    const manager = getMongoManager();

    // Check if token already exists
    const targetToken = await getMongoRepository(Token).findOne({
      email: req.body.email,
    });

    // Check if token already exists
    if (targetToken) {
      return next(msg.tokenAlreadyExists());
    }

    // Create token
    const token = new Token();
    token.email = req.body.email;
    token.token = generateToken(token.email);

    await manager.save(token);

    req.app.locals.return = token;

    return next();
  } catch (e) {
    return next(msg.errorApi(e));
  }
};

export const verifyToken = async (req: Request, _: Response, next: any) => {
  try {
    let targetToken;

    // Check if token already exists
    targetToken = req.app.locals.token = await getMongoRepository(
      Token,
    ).findOne({
      token: req.body.token,
    });

    if (!targetToken) {
      return next(msg.tokenNotFound());
    }

    // Check if quota has been reached
    if (
      targetToken.quota < 1 ||
      targetToken.quota - countWords(req.body.text) < 1
    ) {
      return next(msg.quotaError());
    }

    return next();
  } catch (e) {
    return next(msg.errorApi(e));
  }
};
