import { SiPixiv, SiReddit } from 'react-icons/si'
import { MdFavorite, MdFullscreen } from 'react-icons/md'
import { IPic } from '@/typings'
import { Dispatch, SetStateAction } from 'react'

export default function HoverImage({
  image,
  setShowInfo,
  setselectedImage,
  index,
}: {
  image: IPic
  setShowInfo: Dispatch<SetStateAction<boolean>>
  setselectedImage: Dispatch<
    SetStateAction<{
      image: string
      index: number
    } | null>
  >
  index: number
}) {
  function isPixiv(url: string) {
    return url.includes('pixiv')
  }

  return (
    <>
      {/* Cover */}
      <div className='absolute inset-0 flex opacity-70 bg-black'></div>

      {/* Info */}
      <div
        onClick={() => {
          setShowInfo(false)
        }}
        className='absolute inset-0 flex flex-col gap-4 justify-center items-center select-none cursor-pointer'
      >
        {/* Likes */}
        <div className='flex gap-1 items-center'>
          <MdFavorite className='text-[1.7rem] text-rose-600 brightness-125' />
          <span className='text-red-500 text-xl font-black brightness-125'>
            {image.favourites}
          </span>
          <span className='text-white text-xs'>Likes</span>
        </div>

        {/* Source */}
        {image.source && (
          <a
            href={image.source}
            target='_blank'
            rel='noreferrer'
            className='flex gap-2 items-center hover:hue-rotate-30 transition'
          >
            {isPixiv(image.source) ? (
              <>
                <SiPixiv className='text-[1.7rem] text-cyan-500 brightness-125' />
                <span className='text-slate-200 text-sm'>Pixiv</span>
              </>
            ) : (
              <>
                <SiReddit className='text-[1.7rem] text-orange-500 brightness-125' />
                <span className='text-slate-200 text-sm'>Reddit</span>
              </>
            )}
          </a>
        )}

        <MdFullscreen
          onClick={(e) => {
            e.stopPropagation()
            document.body.style.overflow = 'hidden'
            setselectedImage({
              image: image.url,
              index,
            })
          }}
          className='text-slate-200 text-[2.5rem] absolute left-2 top-3'
        />
      </div>
    </>
  )
}
