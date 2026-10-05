const fs = require('fs');
const path = require('path');

const basePath = 'c:/Users/austi/OneDrive/Desktop/zekano-cleaning-co/app/(app)/services';
const pages = [
  'deep-cleaning/page.tsx',
  'disinfection-services/page.tsx',
  'property-improvement/page.tsx',
  'landscaping-property/page.tsx',
  'garden-lawn/page.tsx',
  'commercial-property/page.tsx'
];

pages.forEach(page => {
  const filePath = path.join(basePath, page);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add import if it doesn't exist
  if (!content.includes('import { GoogleReviewsCTA }')) {
    content = content.replace(
      'import { Header } from "@/components/header"',
      'import { Header } from "@/components/header"\nimport { GoogleReviewsCTA } from "@/components/google-reviews-cta"'
    );
  }

  // Remove existing <GoogleReviewsCTA /> if any (to prevent duplicates)
  content = content.replace(/\s*<GoogleReviewsCTA \/>\s*/g, '\n\n');

  // Insert before `{/* Why Us Section */}` or `{/* REDESIGNED: Why Choose Us */}`
  if (content.includes('{/* Why Us Section */}')) {
    content = content.replace(
      /(\s*{\/\* Why Us Section \*\/})/,
      '\n\n        <GoogleReviewsCTA />$1'
    );
  } else if (content.includes('{/* REDESIGNED: Why Choose Us */}')) {
    content = content.replace(
      /(\s*{\/\* REDESIGNED: Why Choose Us \*\/})/,
      '\n\n        <GoogleReviewsCTA />$1'
    );
  } else if (content.includes('{/* Why Choose Us */}')) {
    content = content.replace(
      /(\s*{\/\* Why Choose Us \*\/})/,
      '\n\n        <GoogleReviewsCTA />$1'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${page}`);
});
