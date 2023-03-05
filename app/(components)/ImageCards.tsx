import { ImageCardsProps } from '@/typings'
import { BlurImage } from './BlurImage'

const ImageCards = ({
  newWaifus,
  waifus,
  setselectedImage,
}: ImageCardsProps) => {
  return (
    <>
      {newWaifus ? (
        // client side images
        <>
          {newWaifus.map((waifu, index) => (
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
      ) : (
        // server component images
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
      )}
    </>
  )
}

export default ImageCards
