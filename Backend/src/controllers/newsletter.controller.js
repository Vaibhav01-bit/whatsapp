import { NewsletterSubscriber } from '../models/NewsletterSubscriber.js';
import { sendEmail } from '../utils/sendEmail.js';

export async function subscribeNewsletter(req, res, next) {
  try {
    const email = req.body.email.toLowerCase();

    const existing = await NewsletterSubscriber.findOne({ email });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: 'Email is already subscribed',
        data: existing,
      });
    }

    const subscriber = await NewsletterSubscriber.create({
      email,
      sourcePage: req.body.sourcePage || '/resources/blog',
    });

    await sendEmail({
      to: process.env.ADMIN_NOTIFY_EMAIL || process.env.SMTP_USER,
      subject: `New newsletter subscription: ${subscriber.email}`,
      text: `Email: ${subscriber.email}\nSource: ${subscriber.sourcePage}`,
    });

    res.status(201).json({
      success: true,
      message: 'Subscribed successfully',
      data: subscriber,
    });
  } catch (error) {
    next(error);
  }
}

export async function listSubscribers(req, res, next) {
  try {
    const { page = 1, limit = 20 } = req.query;
    const items = await NewsletterSubscriber.find({})
      .sort({ createdAt: -1 })
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await NewsletterSubscriber.countDocuments();

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
