import mongoose from 'mongoose';

const socialLinksSchema = new mongoose.Schema(
  {
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    x: { type: String, default: '' },
    whatsapp: { type: String, default: '' },
  },
  { _id: false }
);

const siteConfigSchema = new mongoose.Schema(
  {
    brandName: { type: String, default: 'Resobrand' },
    supportEmail: { type: String, default: 'hello@resobrand.com' },
    supportPhone: { type: String, default: '+91' },
    whatsappNumber: { type: String, default: '' },
    addressLine1: { type: String, default: 'Delhi' },
    addressLine2: { type: String, default: '' },
    footerText: { type: String, default: '' },
    socialLinks: { type: socialLinksSchema, default: () => ({}) },
  },
  { timestamps: true }
);

export const SiteConfig = mongoose.model('SiteConfig', siteConfigSchema);
