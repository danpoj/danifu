import { scrollToTop } from '@/libs/scrollToTop'
import { BiArrowToTop } from 'react-icons/bi'

const ScrollTopButton = () => {
  return (
    <button
      onClick={scrollToTop}
      className='w-14 h-14 md:w-16 md:h-16 rounded-full bg-black shadow-xl flex justify-center items-center group active:scale-90 transition'
    >
      <BiArrowToTop className='text-3xl text-slate-300 group-hover:text-slate-100' />
    </button>
  )
}

export default ScrollTopButton
