import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'

export default buildConfig({
  admin: {
    user: 'users',
  },
  plugins: [
    s3Storage({
      collections: {
        'hero-images': true,
        'service-detail-images': true,
        'service-category-images': true,
        'homepage-service-block': true,
        'before-after-images': true,
        'team-images': true,
        'branding-assets': true,
        media: true,
      },
      bucket: process.env.SUPABASE_STORAGE_BUCKET || 'media',
      config: {
        endpoint: process.env.SUPABASE_STORAGE_ENDPOINT,
        region: 'auto',
        credentials: {
          accessKeyId: process.env.SUPABASE_STORAGE_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.SUPABASE_STORAGE_SECRET_ACCESS_KEY || '',
        },
        forcePathStyle: true,
      },
    }),
  ],
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },

    // ------------------------------------
    // MEDIA COLLECTIONS (grouped in admin)
    // ------------------------------------

    {
      slug: 'hero-images',
      labels: { singular: 'Hero Image', plural: 'Hero Images' },
      access: {
        read: () => true,
      },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'Hero banner images used at the top of pages and service pages.',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 225, position: 'centre' },
          { name: 'card', width: 768, height: 432, position: 'centre' },
          { name: 'full', width: 1920, height: 1080, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        {
          name: 'page',
          type: 'select',
          admin: { description: 'Which page or service this hero image belongs to.' },
          options: [
            { label: 'Homepage', value: 'homepage' },
            { label: 'About', value: 'about' },
            { label: 'Services Hub', value: 'services' },
            { label: 'Standard House Cleaning', value: 'standard-house-cleaning' },
            { label: 'Deep Cleaning', value: 'deep-cleaning' },
            { label: 'Move-In / Move-Out Cleaning', value: 'move-in-move-out-cleaning' },
            { label: 'Office Cleaning', value: 'office-cleaning' },
            { label: 'Carpet Cleaning', value: 'carpet-cleaning' },
            { label: 'Mattress Cleaning', value: 'mattress-cleaning' },
            { label: 'Upholstery & Furniture Cleaning', value: 'upholstery-furniture-cleaning' },
            { label: 'Residential Cleaning Category', value: 'residential-cleaning' },
            { label: 'Commercial Cleaning Category', value: 'commercial-cleaning' },
            { label: 'Specialised Cleaning Category', value: 'specialised-cleaning' },
            { label: 'Upholstery & Fabric Category', value: 'upholstery-and-fabric' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'label',
          type: 'text',
          admin: { description: 'Short tab label shown in the slideshow navigation (e.g. "01. Homes").' },
        },
        {
          name: 'heading',
          type: 'text',
          admin: { description: 'Main headline. Use \\n to split into two lines (e.g. "Professional Home\\nCleaning.").' },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: { description: 'Short supporting text shown below the headline.' },
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          admin: { description: 'Controls the display order. Lower numbers appear first.' },
        },
      ],
    },

    {
      slug: 'service-detail-images',
      labels: { singular: 'Service Detail Image', plural: 'Service Detail Images' },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'Detail and process images used within individual service pages (e.g. kitchen, bathroom, bedroom shots).',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
          { name: 'card', width: 768, height: 512, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        {
          name: 'service',
          type: 'select',
          admin: { description: 'Which service page this image belongs to.' },
          options: [
            { label: 'Standard House Cleaning', value: 'standard-house-cleaning' },
            { label: 'Deep Cleaning', value: 'deep-cleaning' },
            { label: 'Move-In / Move-Out Cleaning', value: 'move-in-move-out-cleaning' },
            { label: 'Office Cleaning', value: 'office-cleaning' },
            { label: 'Carpet Cleaning', value: 'carpet-cleaning' },
            { label: 'Mattress Cleaning', value: 'mattress-cleaning' },
            { label: 'Upholstery & Furniture Cleaning', value: 'upholstery-furniture-cleaning' },
            { label: 'Specialised Cleaning', value: 'specialised-cleaning' },
            { label: 'General', value: 'general' },
          ],
        },
        { name: 'caption', type: 'text' },
      ],
    },

    {
      slug: 'service-category-images',
      labels: { singular: 'Service Category Image', plural: 'Service Category Images' },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'Images for the four main service category cards on the Services hub page.',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
          { name: 'card', width: 768, height: 512, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        {
          name: 'category',
          type: 'select',
          admin: { description: 'Which service category this image represents.' },
          options: [
            { label: 'Residential Cleaning', value: 'residential' },
            { label: 'Commercial Cleaning', value: 'commercial' },
            { label: 'Upholstery & Fabric Cleaning', value: 'upholstery' },
            { label: 'Specialised Cleaning Services', value: 'specialised' },
          ],
        },
        { name: 'caption', type: 'text' },
      ],
    },

    {
      slug: 'homepage-service-block',
      labels: { singular: 'Homepage Service Block Image', plural: 'Homepage Service Block Images' },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'Featured service images shown in the services block on the homepage.',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
          { name: 'card', width: 768, height: 512, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        {
          name: 'service',
          type: 'select',
          admin: { description: 'Which featured service this card image is for.' },
          options: [
            { label: 'Deep Cleaning', value: 'deep-clean' },
            { label: 'House Cleaning', value: 'house-cleaning' },
            { label: 'Move-In / Move-Out', value: 'move-in-move-out' },
            { label: 'Pest Control', value: 'pest-control' },
          ],
        },
        { name: 'caption', type: 'text' },
      ],
    },

    {
      slug: 'before-after-images',
      labels: { singular: 'Before & After Image', plural: 'Before & After Images' },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'Before and after transformation photos. Tag each image as "Before" or "After" and use the Pair Label to group matching pairs.',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
          { name: 'display', width: 800, height: 600, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Before', value: 'before' },
            { label: 'After', value: 'after' },
          ],
        },
        {
          name: 'room',
          type: 'select',
          options: [
            { label: 'Bathroom', value: 'bathroom' },
            { label: 'Kitchen', value: 'kitchen' },
            { label: 'Living Room', value: 'living-room' },
            { label: 'Bedroom', value: 'bedroom' },
            { label: 'Office', value: 'office' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'pairLabel',
          type: 'text',
          label: 'Pair Label',
          admin: { description: 'Label to match before/after pairs together (e.g. "Bathroom 1", "Living Room 2").' },
        },
      ],
    },

    {
      slug: 'team-images',
      labels: { singular: 'Team Image', plural: 'Team Images' },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'Photos of the Zekano cleaning team and staff.',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 400, position: 'centre' },
          { name: 'card', width: 768, height: 512, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        { name: 'caption', type: 'text' },
      ],
    },

    {
      slug: 'branding-assets',
      labels: { singular: 'Branding Asset', plural: 'Branding Assets' },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'Logos, icons, review badges, and other brand identity assets.',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 200, height: 200, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*', 'image/svg+xml'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        {
          name: 'assetType',
          type: 'select',
          options: [
            { label: 'Logo', value: 'logo' },
            { label: 'Favicon / Icon', value: 'favicon' },
            { label: 'Review Badge', value: 'review-badge' },
            { label: 'Other', value: 'other' },
          ],
        },
      ],
    },

    {
      slug: 'media',
      labels: { singular: 'Media', plural: 'Media' },
      admin: {
        useAsTitle: 'alt',
        group: 'Media',
        description: 'General media uploads that do not fit into a specific category.',
      },
      upload: {
        imageSizes: [
          { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
          { name: 'card', width: 768, height: 512, position: 'centre' },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
      },
      fields: [
        { name: 'alt', type: 'text', required: true },
        { name: 'caption', type: 'text' },
      ],
    },

    // ------------------------------------
    // CONTENT COLLECTIONS
    // ------------------------------------

    {
      slug: 'faqs',
      admin: { useAsTitle: 'question' },
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
        { name: 'order', type: 'number', defaultValue: 0 },
      ],
    },
    {
      slug: 'service-areas',
      admin: { useAsTitle: 'name' },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'order', type: 'number', defaultValue: 0 },
      ],
    },
    {
      slug: 'services',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'slug', type: 'text', required: true },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: 'Residential Cleaning', value: 'Residential Cleaning' },
            { label: 'Commercial Cleaning', value: 'Commercial Cleaning' },
            { label: 'Upholstery & Fabric Cleaning', value: 'Upholstery & Fabric Cleaning' },
            { label: 'Specialised Cleaning Services', value: 'Specialised Cleaning Services' },
          ],
        },
        { name: 'categorySlug', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'longDescription', type: 'textarea', required: true },
        { name: 'image', type: 'text' },
        { name: 'icon', type: 'text' },
        {
          name: 'features',
          type: 'array',
          fields: [{ name: 'item', type: 'text', required: true }],
        },
        {
          name: 'benefits',
          type: 'array',
          fields: [{ name: 'item', type: 'text', required: true }],
        },
        {
          name: 'process',
          type: 'array',
          fields: [{ name: 'item', type: 'text', required: true }],
        },
      ],
    },
    {
      slug: 'company-values',
      admin: { useAsTitle: 'title' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'Shield Check', value: 'ShieldCheckIcon' },
            { label: 'Leaf', value: 'LeafIcon' },
            { label: 'Gear', value: 'GearIcon' },
            { label: 'Trophy', value: 'TrophyIcon' },
            { label: 'Award Star', value: 'AwardStarIcon' },
            { label: 'Money Bag', value: 'MoneyBagIcon' },
            { label: 'Recycle', value: 'RecycleIcon' },
          ],
        },
        {
          name: 'section',
          type: 'select',
          required: true,
          options: [
            { label: 'About Page - What Drives Us', value: 'about' },
            { label: 'Why Choose Us Section', value: 'why-choose-us' },
          ],
        },
        { name: 'order', type: 'number', defaultValue: 0 },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(process.cwd(), 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      max: 10,
      allowExitOnIdle: true,
    },
    push: process.env.NODE_ENV === 'development',
  }),
})
