import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
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
      // Limit connection pool to prevent connection exhaustion
      max: 10, // Adjust based on your DB tier; for Free tier, try 5 or 10
      allowExitOnIdle: true,
    },
    push: process.env.NODE_ENV === 'development',
  }),
})
