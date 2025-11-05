const fs = require('fs');

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/type', priority: '0.9', changefreq: 'weekly' },
  { path: '/process', priority: '0.8', changefreq: 'monthly' },
  { path: '/ps', priority: '0.8', changefreq: 'monthly' },
  { path: '/news', priority: '0.9', changefreq: 'daily' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/type/Apple', priority: '0.9', changefreq: 'weekly' },
  { path: '/type/Asus', priority: '0.9', changefreq: 'weekly' },
  { path: '/type/Samsung', priority: '0.9', changefreq: 'weekly' },
  { path: '/type/Lenovo', priority: '0.9', changefreq: 'weekly' },
  { path: '/type/Razer', priority: '0.9', changefreq: 'weekly' },
  { path: '/type/MSI', priority: '0.9', changefreq: 'weekly' }
];

function generateSitemap() {
  const baseUrl = 'https://comeinmacbook.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = routes.map(route => 
    `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  ).join('\n');
  
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }
  
  fs.writeFileSync('public/sitemap.xml', sitemapContent);
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Generated ${routes.length} URLs for ${baseUrl}`);
}

module.exports = generateSitemap;
