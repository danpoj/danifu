'use client'

import { IPic } from '@/typings'
import Image from 'next/image'
import { useState } from 'react'

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function BlurImage({ image }: { image: IPic }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Image
      alt='pic'
      src={image.url}
      width={image.width}
      height={image.height}
      placeholder='blur'
      blurDataURL='data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAQAAAAnZu5uAAAAEElEQVR42mOM4mGAAkYSmABAYAIEPiBLmAAAAABJRU5ErkJggg=='
      className={cn(
        'duration-500 ease-in-out group-hover:scale-110',
        isLoading ? 'scale-105 blur-sm' : 'scale-100'
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  )
}
