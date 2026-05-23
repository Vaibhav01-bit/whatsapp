import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/admin.js';
import { faqCreateSchema, faqUpdateSchema } from '../controllers/schemas.js';
import { createFaq, deleteFaq, listFaqs, updateFaq } from '../controllers/faq.controller.js';

const router = Router();

router.get('/', listFaqs);
router.post('/',  validate(faqCreateSchema), createFaq); //requireAdmin
router.put('/:id',  validate(faqUpdateSchema), updateFaq);//requireAdmin
router.delete('/:id',  deleteFaq);//requireAdmin

export default router;
