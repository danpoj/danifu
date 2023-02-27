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
