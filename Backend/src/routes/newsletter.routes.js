import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/admin.js';
import { newsletterSchema } from '../controllers/schemas.js';
import { listSubscribers, subscribeNewsletter } from '../controllers/newsletter.controller.js';

const router = Router();

router.post('/subscribe', validate(newsletterSchema), subscribeNewsletter);
router.get('/subscribers',  listSubscribers); //requireAdmin

export default router;
