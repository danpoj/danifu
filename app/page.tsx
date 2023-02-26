import { IPic } from '@/typings'
import Gallery from './Gallery'

export default async function Home() {
  const waifus: IPic[] = await getWaifus()

  return (
    <div className='columns-2 lg:columns-3 xl:columns-4 gap-1 w-full'>
      <Gallery waifus={waifus} />
    </div>
  )
}

async function getWaifus() {
  const res = await fetch('https://api.waifu.im/search?many=true', {
    cache: 'no-store',
  })
  const json = await res.json()

  return json.images
}
