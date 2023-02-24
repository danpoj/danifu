'use client'

import { IPic } from '@/typings'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BlurImage } from './BlurImage'

export default function Home() {
  const [images, setImages] = useState<IPic[]>([])
  const [selectedImage, setSelectedImage] = useState<IPic | null>(null)

  const getImages = async () => {
    const res = await fetch(
      'https://api.waifu.im/search?many=true&origin=PORTRAIT'
    )
    const json = await res.json()

    if (selectedImage === null) {
      setSelectedImage(json.images[0])
    }
    setImages(json.images)
  }

  useEffect(() => {
    getImages()
  }, [])

  if (images.length === 0 || !selectedImage) return <div>hello</div>

  return (
    <div className='flex gap-1'>
      <Image
        priority
        className='w-[36%] h-screen object-cover sticky top-0'
        alt='pic'
        src={selectedImage.url}
        width={selectedImage.width}
        height={selectedImage.height}
        placeholder='blur'
        blurDataURL='data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAQAAAAnZu5uAAAAEElEQVR42mOM4mGAAkYSmABAYAIEPiBLmAAAAABJRU5ErkJggg=='
      />
      <div className='columns-2 gap-1 w-[64%]'>
        {/* <Navigation /> */}

        {images.map((image) => (
          <div
            onClick={() => setSelectedImage(image)}
            key={image.image_id}
            className='overflow-hidden rounded mb-1 group cursor-pointer'
          >
            <BlurImage image={image} />
          </div>
        ))}
      </div>
    </div>
  )
}

// async function getData() {
//   const res = await fetch(
//     'https://api.waifu.im/search?many=true&is_nsfw=true',
//     { cache: 'no-store' }
//   )
//   const data = await res.json()

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return data.images
// }
