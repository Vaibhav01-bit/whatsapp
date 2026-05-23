import mongoose from 'mongoose';

const consultationLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, trim: true, default: '' },
    goals: { type: String, required: true, trim: true, minlength: 10 },
    sourcePage: { type: String, trim: true, default: '/resources/consultant' },
    status: {
      type: String,
      enum: ['new', 'scheduled', 'completed', 'closed'],
      default: 'new',
    },
  },
  { timestamps: true }
);

consultationLeadSchema.index({ email: 1, createdAt: -1 });

export const ConsultationLead = mongoose.model('ConsultationLead', consultationLeadSchema);
