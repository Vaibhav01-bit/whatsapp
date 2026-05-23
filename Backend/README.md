# Resobrand Backend

Express + MongoDB backend for the WhatsApp marketing website.

## What is included

- Contact lead API
- Consultation lead API
- Newsletter subscription API
- Blog post API
- FAQ API
- Shared site-config API
- Optional event logging API
- Admin-key protected write endpoints

## Start

```bash
npm install
cp .env.example .env
npm run dev
```

## Main endpoints

- `POST /api/leads/contact`
- `POST /api/leads/consultation`
- `POST /api/newsletter/subscribe`
- `GET /api/blog/posts`
- `GET /api/blog/posts/:slug`
- `GET /api/faqs`
- `GET /api/site-config`

Admin-key protected:

- `POST /api/blog/posts`
- `PUT /api/blog/posts/:id`
- `DELETE /api/blog/posts/:id`
- `POST /api/faqs`
- `PUT /api/faqs/:id`
- `DELETE /api/faqs/:id`
- `PUT /api/site-config`
- `GET /api/leads/contact`
- `GET /api/leads/consultation`
- `GET /api/newsletter/subscribers`
- `GET /api/events`

Use `x-admin-key: <ADMIN_KEY>` for protected routes.
