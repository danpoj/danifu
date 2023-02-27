'use client'

import { IPic } from '@/typings'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { MdOutlineRefresh, MdFullscreenExit } from 'react-icons/md'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BiArrowToTop } from 'react-icons/bi'
import { BlurImage } from './BlurImage'
import fetchWaifus from '@/libs/fetchWaifus'

export default function Gallery({ waifus }: { waifus: IPic[] }) {
  const [newWaifus, setNewWaifus] = useState<IPic[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setselectedImage] = useState<{
    image: string
    index: number
  } | null>(null)
  // const [imageType, setImageType] = useState({
  //   tag: 'waifu',
  //   is_nsfw: '',
  // })

  const getWaifus = useCallback(async () => {
    setIsLoading(true)

    try {
      const waifuImages = await fetchWaifus('raiden-shogun')
      setNewWaifus(waifuImages)
    } catch (e) {
      console.error('getWaifus', e)
    }

    setIsLoading(false)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
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
      <div className='fixed top-4 right-4 flex flex-col gap-2'>
        <button
          onClick={getWaifus}
          disabled={isLoading}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-black shadow-xl flex justify-center items-center group active:scale-90 transition ${
            isLoading && 'pointer-events-none'
          }`}
        >
          <MdOutlineRefresh
            className={`text-3xl text-slate-300 group-hover:text-slate-100 ${
              isLoading && 'animate-spin'
            }`}
          />
        </button>

        <button
          onClick={scrollToTop}
          className='w-14 h-14 md:w-16 md:h-16 rounded-full bg-black shadow-xl flex justify-center items-center group active:scale-90 transition'
        >
          <BiArrowToTop className='text-3xl text-slate-300 group-hover:text-slate-100' />
        </button>
      </div>

      {selectedImage && (
        <div className='fixed inset-0 h-screen bg-black bg-opacity-90 flex justify-center select-none'>
          <div className='z-50 flex p-4 w-full justify-between h-12 items-center mt-3'>
            <MdFullscreenExit
              onClick={() => {
                document.body.style.overflow = 'unset'
                setselectedImage(null)
              }}
              className='text-white text-[2.4rem] h-12 w-12 p-[0.4rem] rounded cursor-pointer bg-black text-opacity-70 hover:text-opacity-100'
            />
            <div className='flex gap-3 bg-black h-12 rounded-lg'>
              <AiOutlineLeft
                onClick={getPrevImage}
                className='text-2xl p-2 w-12 h-12 text-white rounded opacity-70 cursor-pointer hover:opacity-100 '
              />
              <AiOutlineRight
                onClick={getNextImage}
                className='text-2xl p-2 w-12 h-12 text-white rounded opacity-70 cursor-pointer hover:opacity-100'
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
