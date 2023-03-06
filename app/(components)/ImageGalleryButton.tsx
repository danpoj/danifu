import { ImageGalleryButtonProps } from '@/typings'
import Image from 'next/image'
import { useState } from 'react'
import { BsFillImageFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import InstagramGradient from './InstagramGradient'

const ImageGalleryButton = ({
  firstImages,
  selectedIndex,
  setSelectedIndex,
}: ImageGalleryButtonProps) => {
  const [isModal, setIsModal] = useState(false)

  const toggleGalleryModal = () => {
    setIsModal(!isModal)
  }

  const navigateGallery = (index: number) => {
    return () => {
      setSelectedIndex(index)
    }
  }

  return (
    <>
      <div className='w-48 rounded-lg flex flex-wrap gap-3 flex-row-reverse items-center'>
        <button onClick={toggleGalleryModal} className='btn-primary group'>
          <InstagramGradient />
          {isModal ? (
            <IoClose className='absolute text-2xl text-white' />
          ) : (
            <BsFillImageFill className='absolute text-xl text-white' />
          )}
        </button>
        {isModal &&
          firstImages.map((image, i) => (
            <button
              onClick={navigateGallery(i)}
              key={i}
              className={`${
                selectedIndex === i ? 'brightness-110' : 'brightness-50'
              } w-12 h-12 md:w-14 md:h-14 relative rounded-full hover:brightness-110 transition`}
            >
              <InstagramGradient />
              <Image
                priority
                className='object-cover absolute rounded-full w-12 h-12 md:w-14 md:h-14 object-top top-0'
                src={image.url}
                width={image.width}
                height={image.height}
                alt='waifu image'
              />
            </button>
          ))}
      </div>
    </>
  )
}

export default ImageGalleryButton
