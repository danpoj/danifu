'use client'

import { IPic } from '@/typings'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { MdOutlineRefresh, MdFullscreenExit } from 'react-icons/md'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BlurImage } from './BlurImage'

export default function Gallery({ waifus }: { waifus: IPic[] }) {
  const [newWaifus, setNewWaifus] = useState<IPic[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setselectedImage] = useState<{
    image: string
    index: number
  } | null>(null)

  console.log(selectedImage)

  const getWaifus = useCallback(async () => {
    setIsLoading(true)

    const res = await fetch(
      'https://api.waifu.im/search?many=true&origin=PORTRAIT'
    )
    const json: { images: IPic[] } = await res.json()

    setNewWaifus(json.images)
    setIsLoading(false)
  }, [])

  const getPrevImage = useCallback(() => {
    if (newWaifus) {
      const prevIndex =
        selectedImage!.index === 0
          ? newWaifus.length - 1
          : selectedImage!.index - 1

      setselectedImage({
        image: newWaifus[prevIndex].url,
        index: prevIndex,
      })
    } else {
      const prevIndex =
        selectedImage!.index === 0
          ? waifus.length - 1
          : selectedImage!.index - 1

      setselectedImage({
        image: waifus[prevIndex].url,
        index: prevIndex,
      })
    }
  }, [newWaifus, waifus, selectedImage])

  const getNextImage = useCallback(() => {
    if (newWaifus) {
      const nextIndex =
        selectedImage!.index === newWaifus.length - 1
          ? 0
          : selectedImage!.index + 1

      setselectedImage({
        image: newWaifus[nextIndex].url,
        index: nextIndex,
      })
    } else {
      const nextIndex =
        selectedImage!.index === waifus.length - 1
          ? 0
          : selectedImage!.index + 1

      setselectedImage({
        image: waifus[nextIndex].url,
        index: nextIndex,
      })
    }
  }, [newWaifus, waifus, selectedImage])

  return (
    <>
      {newWaifus ? (
        // client side images
        <>
          {newWaifus.map((waifu, index) => (
            <div
              key={waifu.image_id}
              className='overflow-hidden rounded mb-1 group relative'
            >
              <BlurImage
                image={waifu}
                setselectedImage={setselectedImage}
                index={index}
              />
            </div>
          ))}
        </>
      ) : (
        // server component images
        <>
          {waifus.map((waifu, index) => (
            <div
              key={waifu.image_id}
              className='overflow-hidden rounded mb-1 group relative'
            >
              <BlurImage
                image={waifu}
                setselectedImage={setselectedImage}
                index={index}
              />
            </div>
          ))}
        </>
      )}

      {/* refresh button */}
      <button
        onClick={getWaifus}
        disabled={isLoading}
        className={`fixed top-4 right-4 w-16 h-16 rounded-full bg-black shadow-xl flex justify-center items-center group active:scale-90 transition ${
          isLoading && 'pointer-events-none'
        }`}
      >
        <MdOutlineRefresh
          className={`text-3xl text-slate-300 group-hover:text-slate-100 ${
            isLoading && 'animate-spin'
          }`}
        />
      </button>

      {selectedImage && (
        <div className='fixed inset-0 h-screen bg-black bg-opacity-90 flex justify-center select-none'>
          <div className=' z-50 flex p-4 w-full justify-between h-12'>
            <MdFullscreenExit
              onClick={() => setselectedImage(null)}
              className='text-white text-5xl bg-black rounded opacity-70'
            />
            <div className='flex gap-3'>
              <AiOutlineLeft
                onClick={getPrevImage}
                className='text-2xl p-2 bg-black w-12 h-12 text-white rounded opacity-70'
              />
              <AiOutlineRight
                onClick={getNextImage}
                className='text-2xl p-2 bg-black w-12 h-12 text-white rounded opacity-70'
              />
            </div>
          </div>
          <Image
            src={selectedImage.image}
            fill
            alt='selected image'
            className='object-contain'
          />
        </div>
      )}
    </>
  )
}
