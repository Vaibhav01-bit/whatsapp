import { FAQ } from '../models/FAQ.js';

export async function listFaqs(req, res, next) {
  try {
    const filter = { isPublished: true };
    if (req.query.category) filter.category = req.query.category;

    const faqs = await FAQ.find(filter).sort({ order: 1, createdAt: 1 });
    res.json({ success: true, data: faqs });
  } catch (error) {
    next(error);
  }
}

export async function createFaq(req, res, next) {
  try {
    const faq = await FAQ.create(req.body);
    res.status(201).json({ success: true, message: 'FAQ created', data: faq });
  } catch (error) {
    next(error);
  }
}

export async function updateFaq(req, res, next) {
  try {
    const faq = await FAQ.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!faq) {
      return res.status(404).json({
        success: false,
        message: 'FAQ not found',
      });
    }

    res.json({ success: true, message: 'FAQ updated', data: faq });
  } catch (error) {
    next(error);
  }
}

export async function deleteFaq(req, res, next) {
  try {
    const faq = await FAQ.findByIdAndDelete(req.params.id);
    if (!faq) {
      return res.status(404).json({
        success: false,
        message: 'FAQ not found',
      });
    }

    res.json({ success: true, message: 'FAQ deleted' });
  } catch (error) {
    next(error);
  }
}
