import { IPic, Tag, OrderBy } from '@/typings'

const BASE_URL = 'https://api.waifu.im'

export default async function fetchWaifus(
  tag: Tag = 'waifu',
  is_nsfw = false,
  order_by: OrderBy = 'RANDOM'
) {
  const res = await fetch(
    `${BASE_URL}/search?many=true&included_tags=${tag}&is_nsfw=${is_nsfw}&order_by=${order_by}`
  )
  const json: { images: IPic[] } = await res.json()

  return json.images
}
