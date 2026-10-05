const fs = require('fs');
const file = 'c:/Users/austi/OneDrive/Desktop/zekano-cleaning-co/lib/services-data.ts';
let content = fs.readFileSync(file, 'utf8');

// Fix office-cleaning image
content = content.replace(
  /slug: "office-cleaning",[\s\S]*?image: "\/property improvement\/sportsfield\.jpeg",/,
  (match) => match.replace('"/property improvement/sportsfield.jpeg"', '"/office/office hero.webp"')
);

const phrasing = " Zenako acts as your main point of contact, working closely with a trusted network of experienced, specialist contractors where required.";

const slugs = [
  'garden-lawn',
  'landscaping-property',
  'commercial-property',
  'property-improvement'
];

for (const slug of slugs) {
  const regex = new RegExp(`(slug: "${slug}",[\\s\\S]*?longDescription: ")(.*?)(")`, 'g');
  content = content.replace(regex, (match, p1, p2, p3) => {
    if (p2.includes("Zenako acts as your main point of contact")) return match;
    return p1 + p2 + phrasing + p3;
  });
}

fs.writeFileSync(file, content, 'utf8');
