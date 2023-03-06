import Tilt from 'react-parallax-tilt'

const TiltWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor='#ffffff'
      glarePosition='bottom'
      glareBorderRadius='14px'
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
    >
      {children}
    </Tilt>
  )
}

export default TiltWrapper
