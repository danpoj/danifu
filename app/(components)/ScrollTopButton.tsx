import { scrollToTop } from '@/libs/scrollToTop'
import { BiArrowToTop } from 'react-icons/bi'
import InstagramGradient from './InstagramGradient'

const ScrollTopButton = () => {
  return (
    <button onClick={scrollToTop} className='btn-primary group'>
      <InstagramGradient />
      <BiArrowToTop className='absolute text-2xl text-white' />
    </button>
  )
}

export default ScrollTopButton
