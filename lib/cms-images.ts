import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getServiceDetailImageMap(): Promise<Record<string, string>> {
  try {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'service-detail-images',
      limit: 100,
    })
    const map: Record<string, string> = {}
    for (const doc of docs as any[]) {
      if (doc.service && doc.url && !map[doc.service]) {
        map[doc.service] = doc.url
      }
    }
    return map
  } catch {
    return {}
  }
}
