import { Request, Response } from 'express';

export default function(req: Request, res: Response, next: any) {
  if (!res.finished) {
    if (req.app.locals.plain) {
      res.set('Content-Type', 'text/plain; charset=utf-8');
      res.status(req.app.locals.status || 200);
      res.send(req.app.locals.return);
      return next();
    }

    res.set('Content-Type', 'application/json; charset=utf-8');

    if (!req.route) {
      res.status(404);
      res.json({ success: false, message: 'Route not found.' });
      return next();
    }

    const json: any = { success: true };

    if (req.app.locals.results) {
      json.results = req.app.locals.results;
    }

    if (req.app.locals.return) {
      if (Array.isArray(req.app.locals.return)) {
        json.items = req.app.locals.return;
      } else {
        json.item = req.app.locals.return;
      }
    }

    res.status(req.app.locals.status || 200);
    res.json(json);
  }

  // Clear response locals
  ['status', 'return', 'plain'].forEach(k => delete req.app.locals[k]);

  return next();
}
