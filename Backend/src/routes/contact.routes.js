import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/admin.js';
import { contactLeadSchema } from '../controllers/schemas.js';
import { createContactLead, listContactLeads } from '../controllers/contact.controller.js';

const router = Router();

router.post('/', validate(contactLeadSchema), createContactLead);
router.get('/', listContactLeads); //requireAdmin

export default router;
