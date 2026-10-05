
const fs = require("fs");
const path = require("path");

const basePath = "c:/Users/austi/OneDrive/Desktop/zekano-cleaning-co/app/(app)/services";

const pages = [
  {
    path: "deep-cleaning/page.tsx",
    whatsappLink: "https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20a%20home%2Foffice%20Deep%20Clean.",
    ctaText: "Get a Quote via WhatsApp",
  },
  {
    path: "disinfection-services/page.tsx",
    whatsappLink: "https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20book%20a%20Disinfection%20%26%20Sanitisation%20service.",
    ctaText: "Book via WhatsApp",
  },
  {
    path: "property-improvement/page.tsx",
    whatsappLink: "https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Painting%2C%20Renovations%20or%20Property%20Maintenance.",
    ctaText: "Get a Quote via WhatsApp",
  },
  {
    path: "landscaping-property/page.tsx",
    whatsappLink: "https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Landscaping%2C%20Paving%20or%20Artificial%20Grass.",
    ctaText: "Get a Quote via WhatsApp",
  },
  {
    path: "garden-lawn/page.tsx",
    whatsappLink: "https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20chat%20about%20Regular%20Garden%20Maintenance%20%2F%20a%20Once-off%20Clean-up.",
    ctaText: "Chat on WhatsApp",
  },
  {
    path: "commercial-property/page.tsx",
    whatsappLink: "https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20request%20a%20B2B%20Commercial%20Property%20Maintenance%20proposal.",
    ctaText: "Request Corporate Proposal",
    isCorporate: true,
  },
];

pages.forEach((pageInfo) => {
  const fullPath = path.join(basePath, pageInfo.path);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, "utf8");

  // 1. Insert GoogleReviewsCTA import if not present
  if (!content.includes("GoogleReviewsCTA")) {
    const importStatement = `import { GoogleReviewsCTA } from "@/components/google-reviews-cta"\n`;
    const lastImportIndex = content.lastIndexOf("import ");
    const nextLineIndex = content.indexOf("\n", lastImportIndex) + 1;
    content = content.slice(0, nextLineIndex) + importStatement + content.slice(nextLineIndex);
  }

  // 2. Insert GoogleReviewsCTA after <main className="pt-24">
  if (!content.includes("<GoogleReviewsCTA />")) {
    content = content.replace(/<main className="pt-24">/g, `<main className="pt-24">\n        <GoogleReviewsCTA />`);
  }

  // 3. Replace CTA Buttons in the hero section and bottom section
  // Replace all instances of `href="/book"` with the new whatsapp link.
  // Wait, some might use <Link href="/book"> ... </Link>. 
  // Let us change `<Link href="/book" ... > Text </Link>` to `a` tag or just update `<Link>` properties.
  // Actually, `<a href="URL" target="_blank" rel="noopener noreferrer" ...> Text </a>` is better for external.

  // Regex to match <Link href="/book" ...> ... </Link> or <Link href="/contact" ...> ... </Link>
  const linkRegex = /<Link\s+href="\/(:?book|contact)"([^>]*)>([\s\S]*?)<\/Link>/g;
  
  content = content.replace(linkRegex, (match, urlPath, attributes, innerText) => {
    let styleAttr = attributes;
    let text = pageInfo.ctaText;
    let extraIcon = `<i className="fa-brands fa-whatsapp mr-2 text-lg"></i>`;
    
    if (pageInfo.isCorporate) {
       // Corporate style modification
       // "strong, dedicated corporate CTA button"
       if (styleAttr.includes("backgroundColor")) {
           styleAttr = styleAttr.replace(/backgroundColor:\s*"#[^"]+"/, `backgroundColor: "#1A9AD2"`);
       }
       // Make sure it looks very prominent
       if (!styleAttr.includes("shadow-xl")) {
           styleAttr = styleAttr.replace(/className="/, `className="shadow-xl text-base py-4 `);
       }
    } else {
       // Standard CTA replacement text
       if (!innerText.includes("Book") && !innerText.includes("Discuss") && innerText.includes("Contact")) {
         // Maybe keep original if it is some bottom CTA? No, let us just replace it.
       }
    }
    
    // Convert `<Link>` to `<a>` for external whatsapp link
    return `<a\nhref="${pageInfo.whatsappLink}"\ntarget="_blank"\nrel="noopener noreferrer"${styleAttr}>\n${extraIcon}\n${text}\n</a>`;
  });

  // Write back to file
  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`Updated ${pageInfo.path}`);
});

