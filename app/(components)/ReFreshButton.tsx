import { MdOutlineRefresh } from 'react-icons/md'
import InstagramGradient from './InstagramGradient'

interface Props {
  getWaifus: () => Promise<void>
  isLoading: boolean
}

const ReFreshButton = ({ getWaifus, isLoading }: Props) => {
  return (
    <button
      onClick={getWaifus}
      disabled={isLoading}
      className={`btn-primary group ${isLoading && 'pointer-events-none'}`}
    >
      <InstagramGradient />
      <MdOutlineRefresh
        className={`absolute text-2xl text-white ${
          isLoading && 'animate-spin'
        }`}
      />
    </button>
  )
}

export default ReFreshButton
