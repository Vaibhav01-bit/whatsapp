import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    type: { type: String, required: true, trim: true },
    label: { type: String, required: true, trim: true },
    page: { type: String, trim: true, default: '' },
    metadata: { type: Object, default: {} },
  },
  { timestamps: true }
);

export const Event = mongoose.model('Event', eventSchema);
