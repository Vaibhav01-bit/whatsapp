import { ContactLead } from '../models/ContactLead.js';
import { sendEmail } from '../utils/sendEmail.js';

export async function createContactLead(req, res, next) {
  try {
    const lead = await ContactLead.create(req.body);

    await sendEmail({
      // to: process.env.ADMIN_NOTIFY_EMAIL || process.env.SMTP_USER,
      // subject: `New contact request from ${lead.name}`,
      // text: [
      //   `Name: ${lead.name}`,
      //   `Email: ${lead.email}`,
      //   `Company: ${lead.company || '-'}`,
      //   `Message: ${lead.message}`,
      //   `Source: ${lead.sourcePage}`,
      // ].join('\n'),
    });

    res.status(201).json({
      success: true,
      message: 'Contact request submitted successfully',
      data: lead,
    });
  } catch (error) {
    next(error);
  }
}

export async function listContactLeads(req, res, next) {
  try {
    const { page = 1, limit = 20, status } = req.query;
    const filter = {};
    if (status) filter.status = status;

    const items = await ContactLead.find(filter)
      .sort({ createdAt: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await ContactLead.countDocuments(filter);

    res.json({
      success: true,
      data: items,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
      },
    });
  } catch (error) {
    next(error);
  }
}
