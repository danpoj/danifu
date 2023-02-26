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
  const res = await fetch(
    'https://api.waifu.im/search?many=true&origin=PORTRAIT'
  )
  const json = await res.json()

  return json.images
}

{
  /* <Image
        priority
        className='w-[34%] h-screen object-cover sticky top-0'
        alt='pic'
        src={waifus[0].url}
        width={waifus[0].width}
        height={waifus[0].height}
        placeholder='blur'
        blurDataURL='data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAQAAAAnZu5uAAAAEElEQVR42mOM4mGAAkYSmABAYAIEPiBLmAAAAABJRU5ErkJggg=='
      /> */
}
