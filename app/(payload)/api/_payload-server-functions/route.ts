import { handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@payload-config'
import { importMap } from '../../admin/importMap'

export const POST = async (request: Request) => {
  return handleServerFunctions({
    args: await request.json(),
    config,
    importMap,
  })
}
