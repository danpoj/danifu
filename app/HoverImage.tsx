import { SiPixiv, SiReddit } from 'react-icons/si'
import { MdFavorite } from 'react-icons/md'
import { IPic } from '@/typings'

export default function HoverImage({ image }: { image: IPic }) {
  function isPixiv(url: string) {
    return url.includes('pixiv')
  }

  return (
    <>
      {/* Cover */}
      <div className='absolute inset-0 hidden group-hover:flex opacity-70 bg-black'></div>

      {/* Info */}
      <div className='absolute inset-0 hidden group-hover:flex flex-col gap-4 justify-center items-center'>
        {/* Likes */}
        <div className='flex gap-1 items-center'>
          <MdFavorite className='text-3xl text-rose-600 brightness-125' />
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
                <SiPixiv className='text-3xl text-cyan-500 brightness-125' />
                <span className='text-white text-sm'>Pixiv</span>
              </>
            ) : (
              <>
                <SiReddit className='text-3xl text-orange-500 brightness-125' />
                <span className='text-white text-sm'>Reddit</span>
              </>
            )}
          </a>
        )}
      </div>
    </>
  )
}
