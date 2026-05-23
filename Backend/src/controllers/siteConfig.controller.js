import { SiteConfig } from '../models/SiteConfig.js';

async function getOrCreateConfig() {
  let config = await SiteConfig.findOne();
  if (!config) {
    config = await SiteConfig.create({});
  }
  return config;
}

export async function getSiteConfig(_req, res, next) {
  try {
    const config = await getOrCreateConfig();
    res.json({ success: true, data: config });
  } catch (error) {
    next(error);
  }
}

export async function updateSiteConfig(req, res, next) {
  try {
    const config = await getOrCreateConfig();
    const updated = await SiteConfig.findByIdAndUpdate(config._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      message: 'Site configuration updated',
      data: updated,
    });
  } catch (error) {
    next(error);
  }
}
