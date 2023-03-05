import { FullScreenModalProps } from '@/typings'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { MdFullscreenExit } from 'react-icons/md'

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
    <div className='fixed inset-0 h-screen bg-black bg-opacity-90 flex justify-center select-none'>
      <div className='z-50 flex p-4 w-full justify-between h-12 items-center mt-3'>
        <MdFullscreenExit
          onClick={onExitModalClicked}
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
        src={selectedImage!.image}
        fill
        alt='selected image'
        className='object-contain'
      />
    </div>
  )
}

export default FullScreenModal
