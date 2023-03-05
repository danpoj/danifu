import fetchWaifus from '@/libs/fetchWaifus'
import { IPic, ISelectedImage } from '@/typings'
import { useCallback, useState } from 'react'

export default function useGallery(waifus: IPic[]) {
  const [newWaifus, setNewWaifus] = useState<IPic[] | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedImage, setselectedImage] = useState<ISelectedImage | null>(
    null
  )

  const getWaifus = useCallback(async () => {
    setIsLoading(true)

    try {
      const waifuImages = await fetchWaifus()
      setNewWaifus(waifuImages)
    } catch (e) {
      console.error('getWaifus - fetch Error', e)
    }

    setIsLoading(false)
  }, [])

  const getPrevImage = useCallback(() => {
    if (newWaifus) {
      const prevIndex =
        selectedImage!.index === 0
          ? newWaifus.length - 1
          : selectedImage!.index - 1

      setselectedImage({
        image: newWaifus[prevIndex].url,
        index: prevIndex,
      })
    } else {
      const prevIndex =
        selectedImage!.index === 0
          ? waifus.length - 1
          : selectedImage!.index - 1

      setselectedImage({
        image: waifus[prevIndex].url,
        index: prevIndex,
      })
    }
  }, [newWaifus, waifus, selectedImage])

  const getNextImage = useCallback(() => {
    if (newWaifus) {
      const nextIndex =
        selectedImage!.index === newWaifus.length - 1
          ? 0
          : selectedImage!.index + 1

      setselectedImage({
        image: newWaifus[nextIndex].url,
        index: nextIndex,
      })
    } else {
      const nextIndex =
        selectedImage!.index === waifus.length - 1
          ? 0
          : selectedImage!.index + 1

      setselectedImage({
        image: waifus[nextIndex].url,
        index: nextIndex,
      })
    }
  }, [newWaifus, waifus, selectedImage])

  return {
    newWaifus,
    isLoading,
    selectedImage,
    setselectedImage,
    getWaifus,
    getPrevImage,
    getNextImage,
  }
}
