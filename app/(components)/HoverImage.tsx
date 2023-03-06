import { SiPixiv, SiReddit } from 'react-icons/si'
import { MdFavorite, MdFullscreen } from 'react-icons/md'
import { HoverImageProps } from '@/typings'
import { isPixiv } from '@/libs/isPixiv'

export default function HoverImage({
  image,
  setShowInfo,
  setselectedImage,
  index,
}: HoverImageProps) {
  const onFullScreenButtonClicked = (
    e: React.MouseEvent<SVGElement, MouseEvent>
  ) => {
    e.stopPropagation()
    document.body.style.overflow = 'hidden'
    setselectedImage({
      image: image,
      index,
    })
  }

  const hideInfoCard = () => {
    setShowInfo(false)
  }

  return (
    <>
      {/* Cover */}
      <div className='absolute inset-0 flex opacity-70 bg-black' />

      {/* Info */}
      <div
        onClick={hideInfoCard}
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
        {image.source && <SourceLink source={image.source} />}

        <MdFullscreen
          onClick={onFullScreenButtonClicked}
          className='text-slate-200 text-[2.5rem] absolute left-2 top-3'
        />
      </div>
    </>
  )
}

const SourceLink = ({ source }: { source: string }) => {
  return (
    <a
      href={source}
      target='_blank'
      rel='noreferrer'
      className='flex gap-2 items-center hover:hue-rotate-30 transition'
    >
      {isPixiv(source) ? (
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
  )
}
