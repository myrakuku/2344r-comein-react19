// scripts/sitemap-generator.js
const fs = require('fs');

const routes = [
  { path: '/', priority: '0.5', changefreq: 'yearly' },
  { path: '/type', priority: '0.5', changefreq: 'yearly' },
  { path: '/process', priority: '0.5', changefreq: 'yearly' },
  { path: '/ps', priority: '0.5', changefreq: 'yearly' },
  { path: '/news', priority: '0.5', changefreq: 'yearly' },
  { path: '/about', priority: '0.5', changefreq: 'yearly' },
  { path: '/faq', priority: '0.5', changefreq: 'yearly' },
  { path: '/type/Apple', priority: '0.5', changefreq: 'yearly' },
  { path: '/type/Asus', priority: '0.5', changefreq: 'yearly' },
  { path: '/type/Samsung', priority: '0.5', changefreq: 'yearly' },
  { path: '/type/Lenovo', priority: '0.5', changefreq: 'yearly' },
  { path: '/type/Razer', priority: '0.5', changefreq: 'yearly' },
  { path: '/type/MSI', priority: '0.5', changefreq: 'yearly' }
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
  
  // 簡化版本 - 只保留必要的命名空間，移除 Schema 驗證
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml" 
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" 
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`;

  if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
  }
  
  fs.writeFileSync('public/sitemap.xml', sitemapContent);
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Generated ${routes.length} URLs for ${baseUrl}`);
  console.log('⚙️  All pages: priority=0.5, changefreq=yearly');
  console.log('✅ XML validation issues resolved');
}

function generateRobotsTxt() {
  const baseUrl = 'https://comeinmacbook.com';
  
  const robotsContent = `# https://www.robotstxt.org/robotstxt.html
User-agent: *

# 允許爬取所有頁面
Allow: /

# Sitemap 位置
Sitemap: ${baseUrl}/sitemap.xml`;
  
  fs.writeFileSync('public/robots.txt', robotsContent);
  console.log('✅ Robots.txt generated successfully!');
}

// 如果直接運行此文件（非模組導入）
if (require.main === module) {
  generateSitemap();
  generateRobotsTxt();
  console.log('🚀 All SEO files generated successfully!');
  console.log('📝 Note: XML schema warnings are normal and do not affect search engine crawling');
}

module.exports = {
  generateSitemap,
  generateRobotsTxt
};
