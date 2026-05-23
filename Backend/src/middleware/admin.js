export function requireAdmin(req, res, next) {
  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) {
    return res.status(500).json({
      success: false,
      message: 'ADMIN_KEY is not configured',
    });
  }

  const provided = req.header('x-admin-key');
  if (provided !== adminKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

  next();
}
