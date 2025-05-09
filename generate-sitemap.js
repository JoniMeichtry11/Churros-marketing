const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/nuevo-pedido', changefreq: 'weekly', priority: 0.8 },
  { url: '/cantidad', changefreq: 'weekly', priority: 0.8 },
  { url: '/cantidad/dulce', changefreq: 'weekly', priority: 0.8 },
  { url: '/cantidad/simple', changefreq: 'weekly', priority: 0.8 },
  { url: '/cantidad/address', changefreq: 'weekly', priority: 0.8 },
  { url: '/cantidad/review', changefreq: 'weekly', priority: 0.8 },
  { url: '/cantidad/thanks', changefreq: 'weekly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://churrosdoshermanos.com.ar/' });
streamToPromise(sitemap).then((sm) =>
  fs.writeFileSync('./dist/sitemap.xml', sm.toString())
);
links.forEach((link) => sitemap.write(link));
sitemap.end();
