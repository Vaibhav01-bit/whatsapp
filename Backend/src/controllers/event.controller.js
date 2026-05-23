import { Event } from '../models/Event.js';

export async function createEvent(req, res, next) {
  try {
    const event = await Event.create(req.body);
    res.status(201).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
}

export async function listEvents(req, res, next) {
  try {
    const events = await Event.find({}).sort({ createdAt: -1 }).limit(200);
    res.json({ success: true, data: events });
  } catch (error) {
    next(error);
  }
}
