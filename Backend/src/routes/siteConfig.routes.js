import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/admin.js';
import { siteConfigSchema } from '../controllers/schemas.js';
import { getSiteConfig, updateSiteConfig } from '../controllers/siteConfig.controller.js';

const router = Router();

router.get('/', getSiteConfig);
router.put('/',  validate(siteConfigSchema), updateSiteConfig); //requireAdmin

export default router;
