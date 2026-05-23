import nodemailer from 'nodemailer';

function buildTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT || 587) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendEmail({ to, subject, text, html }) {
  const transport = buildTransport();
  if (!transport) return { skipped: true };

  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  return transport.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });
}
