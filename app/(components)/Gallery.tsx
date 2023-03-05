'use client'

import { IPic } from '@/typings'
import useGallery from '@/hooks/useGallery'
import ReFreshButton from './ReFreshButton'
import ScrollTopButton from './ScrollTopButton'
import FullScreenModal from './FullScreenModal'
import ImageCards from './ImageCards'

export default function Gallery({ waifus }: { waifus: IPic[] }) {
  const {
    newWaifus,
    isLoading,
    selectedImage,
    setselectedImage,
    getWaifus,
    getNextImage,
    getPrevImage,
  } = useGallery(waifus)

  return (
    <div className='columns-2 lg:columns-3 xl:columns-4 gap-1 w-full'>
      <ImageCards
        newWaifus={newWaifus}
        waifus={waifus}
        setselectedImage={setselectedImage}
      />

      <div className='fixed top-4 right-4 flex flex-col gap-2'>
        <ReFreshButton getWaifus={getWaifus} isLoading={isLoading} />
        <ScrollTopButton />
      </div>

      {selectedImage && (
        <FullScreenModal
          selectedImage={selectedImage}
          setselectedImage={setselectedImage}
          getNextImage={getNextImage}
          getPrevImage={getPrevImage}
        />
      )}
    </div>
  )
}
