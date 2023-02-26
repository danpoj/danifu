'use client'

import { IPic } from '@/typings'
import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import HoverImage from './HoverImage'
import cn from '@/libs/classnames'

export function BlurImage({
  image,
  setselectedImage,
  index,
}: {
  image: IPic
  setselectedImage: Dispatch<
    SetStateAction<{
      image: string
      index: number
    } | null>
  >
  index: number
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <>
      <Image
        onClick={() => setShowInfo(true)}
        alt='pic'
        src={image.url}
        width={image.width}
        height={image.height}
        placeholder='blur'
        blurDataURL='data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAQAAAAnZu5uAAAAEElEQVR42mOM4mGAAkYSmABAYAIEPiBLmAAAAABJRU5ErkJggg=='
        className={cn(
          'duration-500 ease-in-out cursor-pointer active:scale:105',
          isLoading ? 'scale-105 blur-sm' : 'scale-100'
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />

      {showInfo && (
        <HoverImage
          image={image}
          setShowInfo={setShowInfo}
          setselectedImage={setselectedImage}
          index={index}
        />
      )}
    </>
  )
}
