import { ImageGalleryButtonProps } from '@/typings'
import Image from 'next/image'
import { useState } from 'react'
import { BsFillImageFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import InstagramGradient from './InstagramGradient'

const ImageGalleryButton = ({
  allWaifus,
  selectedIndex,
  setSelectedIndex,
}: ImageGalleryButtonProps) => {
  const [isModal, setIsModal] = useState(false)

  const onClick = () => {
    setIsModal(!isModal)
  }

  return (
    <>
      <div className='w-48 rounded-lg flex flex-wrap gap-3 flex-row-reverse items-center'>
        <button onClick={onClick} className='btn-primary'>
          <InstagramGradient />
          {isModal ? (
            <IoClose className='absolute text-2xl text-white' />
          ) : (
            <BsFillImageFill className='absolute text-xl text-white' />
          )}
        </button>
        {isModal &&
          Array(allWaifus.length)
            .fill(0)
            .map((_, i) => (
              <button
                onClick={() => {
                  setSelectedIndex(i)
                }}
                key={i}
                className={`${
                  selectedIndex === i ? 'brightness-110' : 'brightness-50'
                } w-12 h-12 relative rounded-full hover:brightness-110 transition`}
              >
                <InstagramGradient />
                <Image
                  className='object-cover absolute rounded-full w-12 h-12 object-top top-0'
                  src={allWaifus[i][0].url}
                  width={80}
                  height={80}
                  alt='first image'
                />
              </button>
            ))}
      </div>
    </>
  )
}

export default ImageGalleryButton
