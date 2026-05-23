import mongoose from 'mongoose';

const contactLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, trim: true, default: '' },
    message: { type: String, required: true, trim: true, minlength: 10 },
    sourcePage: { type: String, trim: true, default: '/company/contact' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

contactLeadSchema.index({ email: 1, createdAt: -1 });

export const ContactLead = mongoose.model('ContactLead', contactLeadSchema);
