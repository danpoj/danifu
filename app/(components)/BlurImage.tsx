'use client'

import { ImageProps } from '@/typings'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import HoverImage from './HoverImage'
import TiltWrapper from './TiltWrapper'
import ImageWrapper from './ImageWrapper'

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
    <TiltWrapper>
      <ImageWrapper
        image={image}
        isLoading={isLoading}
        onImageClicked={onImageClicked}
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
    </TiltWrapper>
  )
}
