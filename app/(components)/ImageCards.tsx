import { ImageCardsProps } from '@/typings'
import { BlurImage } from './BlurImage'

const ImageCards = ({ waifus, setselectedImage }: ImageCardsProps) => {
  return (
    <>
      {waifus.map((waifu, index) => {
        return (
          <div
            key={waifu.image_id}
            className='overflow-hidden rounded mb-1 group'
          >
            <BlurImage
              image={waifu}
              index={index}
              setselectedImage={setselectedImage}
            />
          </div>
        )
      })}
    </>
  )
}

export default ImageCards
