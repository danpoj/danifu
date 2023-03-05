import { ImageCardsProps } from '@/typings'
import { BlurImage } from './BlurImage'

const ImageCards = ({ waifus, setselectedImage }: ImageCardsProps) => {
  return (
    <>
      {waifus.map((waifu, index) => (
        <div
          key={waifu.image_id}
          className='overflow-hidden rounded mb-1 group relative'
        >
          <BlurImage
            image={waifu}
            setselectedImage={setselectedImage}
            index={index}
          />
        </div>
      ))}
    </>
  )
}

export default ImageCards
