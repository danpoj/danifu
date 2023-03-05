import { MdOutlineRefresh } from 'react-icons/md'

interface Props {
  getWaifus: () => Promise<void>
  isLoading: boolean
}

const ReFreshButton = ({ getWaifus, isLoading }: Props) => {
  return (
    <button
      onClick={getWaifus}
      disabled={isLoading}
      className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-black shadow-xl flex justify-center items-center group active:scale-90 transition ${
        isLoading && 'pointer-events-none'
      }`}
    >
      <MdOutlineRefresh
        className={`text-3xl text-slate-300 group-hover:text-slate-100 ${
          isLoading && 'animate-spin'
        }`}
      />
    </button>
  )
}

export default ReFreshButton
