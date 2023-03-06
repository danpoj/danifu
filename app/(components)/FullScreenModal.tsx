import { FullScreenModalProps } from '@/typings'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MdFullscreenExit } from 'react-icons/md'
import InstagramGradient from './InstagramGradient'

const FullScreenModal = ({
  selectedImage,
  setselectedImage,
  getPrevImage,
  getNextImage,
}: FullScreenModalProps) => {
  const onExitModalClicked = () => {
    document.body.style.overflow = 'unset'
    setselectedImage(null)
  }

  return (
    <div className='fixed inset-0 h-screen bg-black/90 flex justify-center select-none'>
      <div className='absolute top-0 z-50 flex p-6 w-full justify-between h-12 items-center mt-7'>
        <InstaButton onClick={onExitModalClicked}>
          <MdFullscreenExit className='absolute text-2xl text-white' />
        </InstaButton>

        <div className='flex gap-3 h-12 rounded-lg'>
          <InstaButton onClick={getPrevImage}>
            <AiOutlineLeft className='absolute text-2xl text-white' />
          </InstaButton>

          <InstaButton onClick={getNextImage}>
            <AiOutlineRight className='absolute text-2xl text-white' />
          </InstaButton>
        </div>
      </div>
      <Image
        src={selectedImage!.image.url}
        width={selectedImage!.image.width}
        height={selectedImage!.image.height}
        alt='selected waifu image'
        className='object-contain w-full h-full'
      />
    </div>
  )
}

const InstaButton = ({
  onClick,
  children,
}: {
  onClick: () => void
  children: React.ReactNode
}) => {
  return (
    <button onClick={onClick} className='btn-primary group'>
      <InstagramGradient />
      {children}
    </button>
  )
}

export default FullScreenModal
