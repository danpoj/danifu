import { ImageCardsProps } from '@/typings'
import { BlurImage } from './BlurImage'
import Tilt from 'react-parallax-tilt'

const ImageCards = ({ waifus, setselectedImage }: ImageCardsProps) => {
  return (
    <>
      {waifus.map((waifu, index) => {
        return (
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.8}
            glareColor='#ffffff'
            glarePosition='bottom'
            glareBorderRadius='20px'
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            key={waifu.image_id}
            className='overflow-hidden rounded mb-1 group'
          >
            <BlurImage
              image={waifu}
              setselectedImage={setselectedImage}
              index={index}
            />
          </Tilt>
        )
      })}
    </>
  )
}

export default ImageCards
