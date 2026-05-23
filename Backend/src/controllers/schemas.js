import { z } from 'zod';

const email = z.string().trim().email('Invalid email address');

export const contactLeadSchema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  email,
  company: z.string().trim().optional().default(''),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
  sourcePage: z.string().trim().optional().default('/company/contact'),
});

export const consultationLeadSchema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  email,
  company: z.string().trim().optional().default(''),
  goals: z.string().trim().min(10, 'Goals must be at least 10 characters'),
  sourcePage: z.string().trim().optional().default('/resources/consultant'),
});

export const newsletterSchema = z.object({
  email,
  sourcePage: z.string().trim().optional().default('/resources/blog'),
});

export const blogPostCreateSchema = z.object({
  title: z.string().trim().min(3),
  excerpt: z.string().trim().min(10),
  content: z.string().trim().min(20),
  image: z.string().trim().optional().default(''),
  author: z.string().trim().optional().default('Resobrand Team'),
  category: z.string().trim().optional().default('General'),
  tags: z.array(z.string().trim()).optional().default([]),
  status: z.enum(['draft', 'published']).optional().default('draft'),
  publishedAt: z.coerce.date().optional().nullable().default(null),
});

export const blogPostUpdateSchema = blogPostCreateSchema.partial();

export const faqCreateSchema = z.object({
  question: z.string().trim().min(3),
  answer: z.string().trim().min(3),
  category: z.string().trim().min(2).default('General'),
  order: z.coerce.number().optional().default(0),
  isPublished: z.coerce.boolean().optional().default(true),
});

export const faqUpdateSchema = faqCreateSchema.partial();

export const siteConfigSchema = z.object({
  brandName: z.string().trim().optional(),
  supportEmail: z.string().trim().email().optional(),
  supportPhone: z.string().trim().optional(),
  whatsappNumber: z.string().trim().optional(),
  addressLine1: z.string().trim().optional(),
  addressLine2: z.string().trim().optional(),
  footerText: z.string().trim().optional(),
  socialLinks: z.object({
    facebook: z.string().trim().optional().default(''),
    instagram: z.string().trim().optional().default(''),
    linkedin: z.string().trim().optional().default(''),
    x: z.string().trim().optional().default(''),
    whatsapp: z.string().trim().optional().default(''),
  }).optional(),
});

export const eventSchema = z.object({
  type: z.string().trim().min(2),
  label: z.string().trim().min(2),
  page: z.string().trim().optional().default(''),
  metadata: z.record(z.any()).optional().default({}),
});
