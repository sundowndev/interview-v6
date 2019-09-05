import express, { Router } from 'express';
import text from './text';
import token from './token';

const router: Router = express.Router();

router.use('/', text);
router.use('/', token);

export default router;
