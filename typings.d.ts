import { Dispatch, SetStateAction } from 'react'

export interface IType {
  tag_id: number
  name: string
  description: string
  is_nsfw: boolean
}

export interface IPic {
  signature: string
  extension: string
  image_id: number
  favourites: number
  dominant_color: string
  source: string | null
  uploaded_at: string
  liked_at: null
  is_nsfw: boolean
  width: number
  height: number
  url: string
  preview_url: string
  tags: IType[]
}

export type Tag =
  | 'maid'
  | 'waifu'
  | 'marin-kitagawa'
  | 'mori-calliope'
  | 'raiden-shogun'
  | 'oppai'
  | 'selfies'
  | 'uniform'

export type OrderBy = 'FAVOURITES' | 'UPLOADED_AT' | 'RANDOM'

export interface ISelectedImage {
  image: string
  index: number
}

export interface ImageProps {
  image: IPic
  setselectedImage: Dispatch<SetStateAction<ISelectedImage | null>>
  index: number
}

export interface HoverImageProps extends ImageProps {
  setShowInfo: Dispatch<SetStateAction<boolean>>
}

export interface FullScreenModalProps {
  selectedImage: ISelectedImage | null
  setselectedImage: Dispatch<SetStateAction<ISelectedImage | null>>
  getPrevImage: () => void
  getNextImage: () => void
}

export interface ImageCardsProps {
  newWaifus: IPic[] | null
  waifus: IPic[]
  setselectedImage: Dispatch<SetStateAction<ISelectedImage | null>>
}
