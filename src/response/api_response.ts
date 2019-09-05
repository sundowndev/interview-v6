import { Request, Response } from 'express';

export default function(req: Request, res: Response, next: any) {
  if (!res.finished) {
    if (!req.route) {
      res.status(404);
      res.json({ success: false, message: 'Route not found.' });
      return next();
    }

    res.status(req.app.locals.status || 200);

    if (req.app.locals.plain) {
      res.set('Content-Type', 'text/plain; charset=utf-8');
      res.send(req.app.locals.return);
    } else {
      res.set('Content-Type', 'application/json; charset=utf-8');

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

      res.json(json);
    }
  }

  // Clear response locals
  ['status', 'return', 'plain'].forEach(k => delete req.app.locals[k]);

  return next();
}
