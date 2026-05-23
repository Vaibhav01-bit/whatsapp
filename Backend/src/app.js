import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

import contactRoutes from './routes/contact.routes.js';
import consultationRoutes from './routes/consultation.routes.js';
import newsletterRoutes from './routes/newsletter.routes.js';
import blogRoutes from './routes/blog.routes.js';
import faqRoutes from './routes/faq.routes.js';
import siteConfigRoutes from './routes/siteConfig.routes.js';
import eventRoutes from './routes/event.routes.js';

const app = express();

const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

app.use(helmet());
app.use(cors({
  origin: clientOrigin,
  credentials: true,
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Backend is running',
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    message: 'API is healthy',
    timestamp: new Date().toISOString(),
  });
});

app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
  })
);

app.use('/api/leads/contact', contactRoutes);
app.use('/api/leads/consultation', consultationRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/site-config', siteConfigRoutes);
app.use('/api/events', eventRoutes);

app.use(notFound);
app.use(errorHandler);

export { app };
