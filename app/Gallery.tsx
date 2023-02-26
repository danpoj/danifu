'use client'

import { IPic } from '@/typings'
import { useCallback, useState } from 'react'
import { MdOutlineRefresh } from 'react-icons/md'
import { BlurImage } from './BlurImage'
import HoverImage from './HoverImage'

export default function Gallery({ waifus }: { waifus: IPic[] }) {
  const [newWaifus, setNewWaifus] = useState<IPic[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const getWaifus = useCallback(async () => {
    setIsLoading(true)

    const res = await fetch(
      'https://api.waifu.im/search?many=true&origin=PORTRAIT'
    )
    const json: { images: IPic[] } = await res.json()

    setNewWaifus(json.images)
    setIsLoading(false)
  }, [])

  return (
    <>
      {newWaifus ? (
        // client side images
        <>
          {newWaifus.map((waifu) => (
            <div
              key={waifu.image_id}
              className='overflow-hidden rounded mb-1 group relative'
            >
              <BlurImage image={waifu} />
              <HoverImage image={waifu} />
            </div>
          ))}
        </>
      ) : (
        // server component images
        <>
          {waifus.map((waifu) => (
            <div
              key={waifu.image_id}
              className='overflow-hidden rounded mb-1 group relative'
            >
              <BlurImage image={waifu} />
              <HoverImage image={waifu} />
            </div>
          ))}
        </>
      )}

      {/* refresh button */}
      <button
        onClick={getWaifus}
        className='fixed top-4 right-4 w-16 h-16 rounded-full bg-black shadow-xl flex justify-center items-center group active:scale-90 transition'
      >
        <MdOutlineRefresh
          className={`text-3xl text-slate-300 group-hover:text-slate-100 ${
            isLoading && 'animate-spin'
          }`}
        />
      </button>
    </>
  )
}
