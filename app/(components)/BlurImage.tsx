'use client'

import { ImageProps } from '@/typings'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import HoverImage from './HoverImage'
import cn from '@/libs/classnames'
import Tilt from 'react-parallax-tilt'

export function BlurImage({ image, setselectedImage, index }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false)

  const onImageClicked = () => {
    setShowInfo(true)
  }

  const onLoadingComplete = () => {
    setIsLoading(false)
  }

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
      <Image
        onClick={onImageClicked}
        alt='pic'
        src={image.url}
        width={image.width}
        height={image.height}
        placeholder='blur'
        blurDataURL='data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAQAAAAnZu5uAAAAEElEQVR42mOM4mGAAkYSmABAYAIEPiBLmAAAAABJRU5ErkJggg=='
        className={cn(
          'duration-500 ease-in-out cursor-pointer',
          isLoading ? 'scale-105 blur-sm' : 'scale-100'
        )}
        onLoadingComplete={onLoadingComplete}
      />

      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <AiOutlineLoading3Quarters className='text-3xl text-violet-400 animate-spin' />
        </div>
      )}

      {showInfo && (
        <HoverImage
          image={image}
          setShowInfo={setShowInfo}
          setselectedImage={setselectedImage}
          index={index}
        />
      )}
    </Tilt>
  )
}
