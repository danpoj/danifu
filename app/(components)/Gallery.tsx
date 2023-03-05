'use client'

import { IPic } from '@/typings'
import useGallery from '@/hooks/useGallery'
import ReFreshButton from './ReFreshButton'
import ScrollTopButton from './ScrollTopButton'
import FullScreenModal from './FullScreenModal'
import ImageCards from './ImageCards'
import ImageGalleryButton from './ImageGalleryButton'

export default function Gallery({ waifus }: { waifus: IPic[] }) {
  const {
    allWaifus,
    selectedIndex,
    setSelectedIndex,
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
        waifus={allWaifus[selectedIndex]}
        setselectedImage={setselectedImage}
      />

      <div className='fixed top-4 right-4 flex flex-col items-end gap-3 w-14'>
        <ReFreshButton getWaifus={getWaifus} isLoading={isLoading} />
        <ScrollTopButton />
        <ImageGalleryButton
          allWaifus={allWaifus}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
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
