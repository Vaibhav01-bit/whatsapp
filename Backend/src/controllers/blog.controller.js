import { BlogPost } from '../models/BlogPost.js';
import { slugify } from '../utils/slugify.js';

export async function listBlogPosts(req, res, next) {
  try {
    const { status = 'published', category } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;

    const posts = await BlogPost.find(filter).sort({ publishedAt: -1, createdAt: -1 });
    res.json({ success: true, data: posts });
  } catch (error) {
    next(error);
  }
}

export async function getBlogPostBySlug(req, res, next) {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
}

export async function createBlogPost(req, res, next) {
  try {
    const payload = req.body;
    const slug = payload.slug || slugify(payload.title);

    const post = await BlogPost.create({
      ...payload,
      slug,
      publishedAt: payload.status === 'published'
        ? (payload.publishedAt || new Date())
        : null,
    });

    res.status(201).json({ success: true, message: 'Blog post created', data: post });
  } catch (error) {
    next(error);
  }
}

export async function updateBlogPost(req, res, next) {
  try {
    const payload = req.body;
    if (payload.title && !payload.slug) {
      payload.slug = slugify(payload.title);
    }

    if (payload.status === 'published' && !payload.publishedAt) {
      payload.publishedAt = new Date();
    }

    const post = await BlogPost.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    res.json({ success: true, message: 'Blog post updated', data: post });
  } catch (error) {
    next(error);
  }
}

export async function deleteBlogPost(req, res, next) {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    res.json({ success: true, message: 'Blog post deleted' });
  } catch (error) {
    next(error);
  }
}
