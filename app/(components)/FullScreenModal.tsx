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
    <div className='fixed inset-0 h-screen bg-instagram-opa95 flex justify-center select-none'>
      <div className='z-50 flex p-4 w-full justify-between h-12 items-center mt-3'>
        <button
          onClick={onExitModalClicked}
          className='btn-primary bg-black/60 hover:bg-black'
        >
          <MdFullscreenExit className='text-2xl text-white' />
        </button>

        <div className='flex gap-3 h-12 rounded-lg'>
          <button
            onClick={getPrevImage}
            className='btn-primary bg-black/60 hover:bg-black rounded-full'
          >
            <AiOutlineLeft className='text-2xl text-white' />
          </button>
          <button
            onClick={getNextImage}
            className='btn-primary bg-black/60 hover:bg-black'
          >
            <AiOutlineRight className='text-2xl text-white' />
          </button>
        </div>
      </div>
      <Image
        src={selectedImage!.image}
        fill
        alt='selected image'
        className='object-contain'
      />
    </div>
  )
}

export default FullScreenModal
