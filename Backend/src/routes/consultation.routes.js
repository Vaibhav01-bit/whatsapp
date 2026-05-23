import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/admin.js';
import { consultationLeadSchema } from '../controllers/schemas.js';
import { createConsultationLead, listConsultationLeads } from '../controllers/consultation.controller.js';

const router = Router();

router.post('/', validate(consultationLeadSchema), createConsultationLead);
router.get('/', listConsultationLeads); //requireAdmin

export default router;
