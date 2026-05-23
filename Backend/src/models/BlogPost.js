import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, unique: true, index: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    image: { type: String, trim: true, default: '' },
    author: { type: String, trim: true, default: 'Resobrand Team' },
    category: { type: String, trim: true, default: 'General' },
    tags: { type: [String], default: [] },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export const BlogPost = mongoose.model('BlogPost', blogPostSchema);
