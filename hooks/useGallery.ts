import fetchWaifus from '@/libs/fetchWaifus'
import { IPic, ISelectedImage } from '@/typings'
import { useCallback, useState } from 'react'

export default function useGallery(waifus: IPic[]) {
  const [allWaifus, setAllWaifus] = useState([waifus])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setselectedImage] = useState<ISelectedImage | null>(
    null
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const getWaifus = useCallback(async () => {
    setIsLoading(true)

    try {
      const waifuImages = await fetchWaifus()
      setAllWaifus((prevWaifus) => [...prevWaifus, waifuImages])
      setSelectedIndex(allWaifus.length)
    } catch (e) {
      console.error('getWaifus - fetch Error', e)
    }

    setIsLoading(false)
  }, [allWaifus.length])

  const getPrevImage = () => {
    const currentImages = allWaifus[selectedIndex]

    const prevIndex =
      selectedImage!.index === 0
        ? currentImages.length - 1
        : selectedImage!.index - 1

    setselectedImage({
      image: currentImages[prevIndex].url,
      index: prevIndex,
    })
  }

  const getNextImage = () => {
    const currentImages = allWaifus[selectedIndex]

    const nextIndex =
      selectedImage!.index === currentImages.length - 1
        ? 0
        : selectedImage!.index + 1

    setselectedImage({
      image: currentImages[nextIndex].url,
      index: nextIndex,
    })
  }

  return {
    allWaifus,
    setSelectedIndex,
    selectedIndex,
    isLoading,
    selectedImage,
    setselectedImage,
    getWaifus,
    getPrevImage,
    getNextImage,
  }
}
