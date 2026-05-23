import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/admin.js';
import { eventSchema } from '../controllers/schemas.js';
import { createEvent, listEvents } from '../controllers/event.controller.js';

const router = Router();

router.post('/', validate(eventSchema), createEvent);
router.get('/', listEvents); //requireAdmin

export default router;
