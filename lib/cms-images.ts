import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const SERVICE_HERO_IMAGES: Record<string, string> = {
  'standard-house-cleaning': '/house cleaning/house hero.webp',
  'deep-cleaning': '/deep cleaning/deep clean.webp',
  'move-in-move-out-cleaning': '/move in move out/move in move out hero.webp',
  'office-cleaning': '/office/office hero.webp',
  'mattress-cleaning': '/matress/mattress-cleaning-services.webp',
  'curtain-cleaning': '/carpet/Professional Curtain Steam Cleaning.webp',
  'carpet-cleaning': '/carpet/Professional Carpet Cleaning Close-Up.webp',
  'upholstery-furniture-cleaning': '/couch/couch hero.png',
  'roof-cleaning': '/commercial and specialist services/Roof clean.webp',
  'drain-cleaning': '/commercial and specialist services/cleaning kitchen sink drain.webp',
  'garden-clean-ups': '/garden/Garden clean up.webp',
  'pest-control': '/commercial and specialist services/pest control (1).webp',
  'disinfection-services': '/cleaning images/zenako-disinfection-fogging-johannesburg.webp',
  'garden-lawn': '/new services/Garden Makeover.webp',
  'landscaping-property': '/new services/Landscaping (1).webp',
  'artificial-grass': '/garden/Artifical grass installation.webp',
  'property-improvement': '/property improvement/Modern House Window Cleaning Scene.webp',
}

export async function getServiceDetailImageMap(): Promise<Record<string, string>> {
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'hero-images',
      limit: 100,
    })
    const map: Record<string, string> = { ...SERVICE_HERO_IMAGES }
    for (const doc of docs as any[]) {
      if (doc.page && doc.url && doc.page !== 'upholstery-furniture-cleaning' && doc.page !== 'mattress-cleaning' && doc.page !== 'carpet-cleaning' && doc.page !== 'curtain-cleaning') {
        map[doc.page] = doc.url
      }
    }
    // Always guarantee canonical hero images for upholstery, mattress, carpet, curtain
    map['upholstery-furniture-cleaning'] = '/couch/couch hero.png'
    map['mattress-cleaning'] = '/matress/mattress-cleaning-services.webp'
    map['carpet-cleaning'] = '/carpet/Professional Carpet Cleaning Close-Up.webp'
    map['curtain-cleaning'] = '/carpet/Professional Curtain Steam Cleaning.webp'
    return map
  } catch {
    return { ...SERVICE_HERO_IMAGES }
  }
}
