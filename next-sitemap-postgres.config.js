module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://docs.gibsonai.com',
  exclude: ['/docs/*', '!/postgresql/*', '/*'],
  sitemapBaseFileName: 'sitemap-postgres',
};
