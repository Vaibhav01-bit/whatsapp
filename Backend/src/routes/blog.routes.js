import { Router } from 'express';
import { validate } from '../middleware/validate.js';
import { requireAdmin } from '../middleware/admin.js';
import { blogPostCreateSchema, blogPostUpdateSchema } from '../controllers/schemas.js';
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPostBySlug,
  listBlogPosts,
  updateBlogPost,
} from '../controllers/blog.controller.js';

const router = Router();

router.get('/posts', listBlogPosts);
router.get('/posts/:slug', getBlogPostBySlug);

router.post('/posts', validate(blogPostCreateSchema), createBlogPost);//requireAdmin
router.put('/posts/:id', validate(blogPostUpdateSchema), updateBlogPost); //requireAdmin
router.delete('/posts/:id', deleteBlogPost); //requireAdmin

export default router;
