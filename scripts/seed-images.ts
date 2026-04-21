import { readFileSync, existsSync } from 'fs'
import { resolve, extname, basename } from 'path'

// Load .env.local before Payload initializes
try {
  const envPath = resolve(process.cwd(), '.env.local')
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const match = line.match(/^([^#\s][^=]*)=(.*)$/)
    if (match) process.env[match[1].trim()] = match[2].trim()
  }
} catch {
  // .env.local not found
}

const PUBLIC = resolve(process.cwd(), 'public')

function mimeType(filePath: string): string {
  const ext = extname(filePath).toLowerCase()
  const map: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
  }
  return map[ext] ?? 'application/octet-stream'
}

function file(relativePath: string) {
  const abs = resolve(PUBLIC, relativePath)
  if (!existsSync(abs)) {
    console.warn(`  ⚠ File not found: ${relativePath}`)
    return null
  }
  const data = readFileSync(abs)
  return {
    data,
    mimetype: mimeType(abs),
    name: basename(abs),
    size: data.length,
  }
}

async function seed() {
  const { getPayload } = await import('payload')
  const { default: configPromise } = await import('../payload.config')
  const payload = await getPayload({ config: configPromise })

  // ─── HERO IMAGES ─────────────────────────────────────────────────────────────
  const heroImages = await payload.find({ collection: 'hero-images', limit: 1 })
  if (heroImages.totalDocs > 0) {
    console.log(`Hero images already seeded (${heroImages.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding hero images...')

    const heroes: Array<{
      path: string
      alt: string
      page: string
      label?: string
      heading?: string
      description?: string
      order: number
    }> = [
      {
        path: 'home_page_heros/homes_hero.webp',
        alt: 'Professional home cleaning in Johannesburg',
        page: 'homepage',
        label: '01. Homes',
        heading: 'Professional Home\nCleaning.',
        description: 'Trusted cleaning professionals for your home in Johannesburg and surrounds.',
        order: 1,
      },
      {
        path: 'home_page_heros/office.webp',
        alt: 'Professional office cleaning in Johannesburg',
        page: 'office-cleaning',
        label: '02. Offices',
        heading: 'Professional Office\nCleaning.',
        description: 'Consistent, reliable cleaning services for your workspace.',
        order: 2,
      },
      {
        path: 'home_page_heros/specialized services hero.webp',
        alt: 'Specialised cleaning services in Johannesburg',
        page: 'specialised-cleaning',
        label: '03. Specialised',
        heading: 'Specialised Cleaning\nServices.',
        description: 'From carpet to post-construction - we handle the tough jobs.',
        order: 3,
      },
      {
        path: 'house cleaning/house hero.webp',
        alt: 'Standard house cleaning service',
        page: 'standard-house-cleaning',
        order: 0,
      },
      {
        path: 'carpet/carpet hero.webp',
        alt: 'Professional carpet cleaning service',
        page: 'carpet-cleaning',
        order: 0,
      },
      {
        path: 'move in move out/move in move out hero.webp',
        alt: 'Move-in move-out cleaning service',
        page: 'move-in-move-out-cleaning',
        order: 0,
      },
      {
        path: 'office/office hero.webp',
        alt: 'Office cleaning professionals at work',
        page: 'office-cleaning',
        order: 0,
      },
      {
        path: 'couch/couch hero.png',
        alt: 'Upholstery and furniture cleaning',
        page: 'upholstery-furniture-cleaning',
        order: 0,
      },
    ]

    for (const hero of heroes) {
      const f = file(hero.path)
      if (!f) continue
      await payload.create({
        collection: 'hero-images',
        data: {
          alt: hero.alt,
          page: hero.page,
          label: hero.label ?? '',
          heading: hero.heading ?? '',
          description: hero.description ?? '',
          order: hero.order,
        },
        file: f,
      })
      console.log(`  ✓ [hero-images] ${hero.path}`)
    }
  }

  // ─── SERVICE CATEGORY IMAGES ──────────────────────────────────────────────────
  const catImages = await payload.find({ collection: 'service-category-images', limit: 1 })
  if (catImages.totalDocs > 0) {
    console.log(`Service category images already seeded (${catImages.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding service category images...')

    const categories = [
      { path: 'our services click/residential.jpg', alt: 'Residential cleaning services', category: 'residential' },
      { path: 'our services click/commercial.jpg', alt: 'Commercial cleaning services', category: 'commercial' },
      { path: 'our services click/upholstery.webp', alt: 'Upholstery and fabric cleaning', category: 'upholstery' },
      { path: 'our services click/specialised.webp', alt: 'Specialised cleaning services', category: 'specialised' },
    ]

    for (const cat of categories) {
      const f = file(cat.path)
      if (!f) continue
      await payload.create({
        collection: 'service-category-images',
        data: { alt: cat.alt, category: cat.category },
        file: f,
      })
      console.log(`  ✓ [service-category-images] ${cat.path}`)
    }
  }

  // ─── HOMEPAGE SERVICE BLOCK IMAGES ───────────────────────────────────────────
  const blockImages = await payload.find({ collection: 'homepage-service-block', limit: 1 })
  if (blockImages.totalDocs > 0) {
    console.log(`Homepage service block images already seeded (${blockImages.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding homepage service block images...')

    const blocks = [
      { path: 'home_page services_block images/deep clean.webp', alt: 'Deep cleaning service', service: 'deep-clean' },
      { path: 'home_page services_block images/house cleaning.webp', alt: 'House cleaning service', service: 'house-cleaning' },
      { path: 'home_page services_block images/move in move out.webp', alt: 'Move-in move-out cleaning', service: 'move-in-move-out' },
      { path: 'home_page services_block images/pest control.webp', alt: 'Pest control service', service: 'pest-control' },
    ]

    for (const block of blocks) {
      const f = file(block.path)
      if (!f) continue
      await payload.create({
        collection: 'homepage-service-block',
        data: { alt: block.alt, service: block.service },
        file: f,
      })
      console.log(`  ✓ [homepage-service-block] ${block.path}`)
    }
  }

  // ─── BEFORE & AFTER IMAGES ────────────────────────────────────────────────────
  const beforeAfterImages = await payload.find({ collection: 'before-after-images', limit: 1 })
  if (beforeAfterImages.totalDocs > 0) {
    console.log(`Before & after images already seeded (${beforeAfterImages.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding before & after images...')

    const beforeAfter = [
      { path: 'home page before and after/bathroom left.jpg', alt: 'Bathroom before cleaning', type: 'before', room: 'bathroom', pairLabel: 'Bathroom 1' },
      { path: 'home page before and after/bathroom right.jpg', alt: 'Bathroom after cleaning', type: 'after', room: 'bathroom', pairLabel: 'Bathroom 1' },
      { path: 'home page before and after/living room before.webp', alt: 'Living room before cleaning', type: 'before', room: 'living-room', pairLabel: 'Living Room 1' },
      { path: 'home page before and after/living room after.webp', alt: 'Living room after cleaning', type: 'after', room: 'living-room', pairLabel: 'Living Room 1' },
    ]

    for (const img of beforeAfter) {
      const f = file(img.path)
      if (!f) continue
      await payload.create({
        collection: 'before-after-images',
        data: { alt: img.alt, type: img.type, room: img.room, pairLabel: img.pairLabel },
        file: f,
      })
      console.log(`  ✓ [before-after-images] ${img.path}`)
    }
  }

  // ─── SERVICE DETAIL IMAGES ────────────────────────────────────────────────────
  const detailImages = await payload.find({ collection: 'service-detail-images', limit: 1 })
  if (detailImages.totalDocs > 0) {
    console.log(`Service detail images already seeded (${detailImages.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding service detail images...')

    const details: Array<{ path: string; alt: string; service: string; caption?: string }> = [
      // Standard House Cleaning
      { path: 'house cleaning/bathroom.webp', alt: 'Bathroom cleaning service', service: 'standard-house-cleaning' },
      { path: 'house cleaning/bedroom.webp', alt: 'Bedroom cleaning service', service: 'standard-house-cleaning' },
      { path: 'house cleaning/kitchen.jpg', alt: 'Kitchen cleaning service', service: 'standard-house-cleaning' },
      { path: 'house cleaning/oven add on.webp', alt: 'Oven cleaning add-on', service: 'standard-house-cleaning', caption: 'Oven cleaning add-on' },
      // Deep Cleaning
      { path: 'deep cleaning/bathroom.webp', alt: 'Deep bathroom cleaning', service: 'deep-cleaning' },
      { path: 'deep cleaning/bedrooms.webp', alt: 'Deep bedroom cleaning', service: 'deep-cleaning' },
      { path: 'deep cleaning/cleaning-kitchen-sink-drain.webp', alt: 'Deep kitchen sink cleaning', service: 'deep-cleaning' },
      { path: 'deep cleaning/deep clean.webp', alt: 'Deep cleaning in progress', service: 'deep-cleaning' },
      // Move-In / Move-Out
      { path: 'move in move out/bathroom.webp', alt: 'Move-out bathroom cleaning', service: 'move-in-move-out-cleaning' },
      { path: 'move in move out/bedrooms.webp', alt: 'Move-out bedroom cleaning', service: 'move-in-move-out-cleaning' },
      { path: 'move in move out/floors.webp', alt: 'Move-out floor cleaning', service: 'move-in-move-out-cleaning' },
      { path: 'move in move out/kitchen.webp', alt: 'Move-out kitchen cleaning', service: 'move-in-move-out-cleaning' },
      // Office Cleaning
      { path: 'office/office 2.jpg', alt: 'Office cleaning professionals', service: 'office-cleaning' },
      { path: 'office/office 3.jpg', alt: 'Clean and tidy office space', service: 'office-cleaning' },
      // Carpet Cleaning
      { path: 'carpet/Carpet 2.jpeg', alt: 'Professional carpet cleaning', service: 'carpet-cleaning' },
      { path: 'carpet/carpet.jpeg', alt: 'Carpet deep cleaning process', service: 'carpet-cleaning' },
      // Mattress Cleaning
      { path: 'matress/How-to-clean-your-mattress-feature-759x500.png', alt: 'Mattress cleaning process', service: 'mattress-cleaning' },
      { path: 'matress/matress.jpg', alt: 'Clean mattress after service', service: 'mattress-cleaning' },
      { path: 'matress/mattress-cleaning-services.webp', alt: 'Professional mattress cleaning', service: 'mattress-cleaning' },
      // Upholstery & Furniture
      { path: 'couch/coach2.webp', alt: 'Couch upholstery cleaning', service: 'upholstery-furniture-cleaning' },
      { path: 'couch/couch 3.jpg', alt: 'Sofa cleaning result', service: 'upholstery-furniture-cleaning' },
      { path: 'couch/couch.webp', alt: 'Upholstery cleaning process', service: 'upholstery-furniture-cleaning' },
    ]

    for (const img of details) {
      const f = file(img.path)
      if (!f) continue
      await payload.create({
        collection: 'service-detail-images',
        data: { alt: img.alt, service: img.service, caption: img.caption ?? '' },
        file: f,
      })
      console.log(`  ✓ [service-detail-images] ${img.path}`)
    }
  }

  // ─── TEAM IMAGES ─────────────────────────────────────────────────────────────
  const teamImages = await payload.find({ collection: 'team-images', limit: 1 })
  if (teamImages.totalDocs > 0) {
    console.log(`Team images already seeded (${teamImages.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding team images...')

    const team = [
      { path: 'cleaning lady.webp', alt: 'Zekano cleaning professional', caption: 'Professional cleaner' },
      { path: 'cheerful-black-professional-cleaner-woman-600nw-2411115957-removebg-preview.png', alt: 'Cheerful Zekano cleaning professional', caption: 'Zekano team member' },
      { path: 'cleaning images/zenako-cleaning-team.webp', alt: 'Zekano cleaning team', caption: 'Our team' },
      { path: 'cleaning images/zenako-cleaning-team-walking.webp', alt: 'Zekano cleaning team on the way to a job', caption: 'Zekano team heading to a job' },
    ]

    for (const img of team) {
      const f = file(img.path)
      if (!f) continue
      await payload.create({
        collection: 'team-images',
        data: { alt: img.alt, caption: img.caption },
        file: f,
      })
      console.log(`  ✓ [team-images] ${img.path}`)
    }
  }

  // ─── BRANDING ASSETS ─────────────────────────────────────────────────────────
  const brandingAssets = await payload.find({ collection: 'branding-assets', limit: 1 })
  if (brandingAssets.totalDocs > 0) {
    console.log(`Branding assets already seeded (${brandingAssets.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding branding assets...')

    const branding: Array<{ path: string; alt: string; assetType: string }> = [
      { path: 'logo.png', alt: 'Zekano Cleaning Co logo', assetType: 'logo' },
      { path: 'favicon zenako.png', alt: 'Zekano favicon', assetType: 'favicon' },
      { path: 'apple-icon.png', alt: 'Zekano Apple touch icon', assetType: 'favicon' },
      { path: 'icon.svg', alt: 'Zekano icon SVG', assetType: 'favicon' },
      { path: 'icon-dark-32x32.png', alt: 'Zekano icon dark 32x32', assetType: 'favicon' },
      { path: 'icon-light-32x32.png', alt: 'Zekano icon light 32x32', assetType: 'favicon' },
      { path: 'google-reviews-1-.png', alt: 'Google Reviews badge', assetType: 'review-badge' },
    ]

    for (const asset of branding) {
      const f = file(asset.path)
      if (!f) continue
      await payload.create({
        collection: 'branding-assets',
        data: { alt: asset.alt, assetType: asset.assetType },
        file: f,
      })
      console.log(`  ✓ [branding-assets] ${asset.path}`)
    }
  }

  // ─── GENERAL MEDIA ────────────────────────────────────────────────────────────
  const generalMedia = await payload.find({ collection: 'media', limit: 1 })
  if (generalMedia.totalDocs > 0) {
    console.log(`General media already seeded (${generalMedia.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding general media...')

    const media = [
      { path: 'Curtain-Cleaning.jpg', alt: 'Curtain cleaning service' },
      { path: 'cleaning-kitchen-sink-drain.webp', alt: 'Kitchen sink drain cleaning' },
      { path: 'cleaning images/Deep Carpet cleaning image 1.webp', alt: 'Deep carpet cleaning' },
      { path: 'cleaning images/zenako-airbnb-cleaning-johannesburg.webp', alt: 'Airbnb cleaning Johannesburg' },
      { path: 'cleaning images/zenako-deep-cleaning.webp', alt: 'Zekano deep cleaning service' },
      { path: 'cleaning images/zenako-disinfection-fogging-johannesburg.webp', alt: 'Disinfection fogging Johannesburg' },
      { path: 'cleaning images/zenako-event-cleaning-johannesburg.webp', alt: 'Event cleaning Johannesburg' },
      { path: 'cleaning images/zenako-festive season-cleaning-johannesburg.webp', alt: 'Festive season cleaning Johannesburg' },
      { path: 'cleaning images/zenako-garden-cleaning.webp', alt: 'Garden cleaning service' },
      { path: 'cleaning images/zenako-house-cleaning-johannesburg.webp', alt: 'House cleaning Johannesburg' },
      { path: 'cleaning images/zenako-kitchen-cleaning-before-after.webp', alt: 'Kitchen cleaning before and after' },
      { path: 'cleaning images/zenako-kitchen-cleaning.webp', alt: 'Kitchen cleaning service' },
      { path: 'cleaning images/zenako-office-cleaning-johannesburg.webp', alt: 'Office cleaning Johannesburg' },
      { path: 'cleaning images/zenako-office-move-out-cleaning-johannesburg.webp', alt: 'Office move-out cleaning Johannesburg' },
      { path: 'cleaning images/zenako-post-construction-cleaning-johannesburg.webp', alt: 'Post-construction cleaning Johannesburg' },
      { path: 'cleaning images/zenako-roof-cleaning.webp', alt: 'Roof cleaning service' },
      { path: 'cleaning images/zenako-window-cleaning-johannesburg.webp', alt: 'Window cleaning Johannesburg' },
    ]

    for (const img of media) {
      const f = file(img.path)
      if (!f) continue
      await payload.create({
        collection: 'media',
        data: { alt: img.alt },
        file: f,
      })
      console.log(`  ✓ [media] ${img.path}`)
    }
  }

  console.log('\nDone seeding images.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
