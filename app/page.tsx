import fetchWaifus from '@/libs/fetchWaifus'
import { IPic } from '@/typings'
import Gallery from './(components)/Gallery'

export default async function Home() {
  const waifus: IPic[] = await fetchWaifus()

  return <Gallery waifus={waifus} />
}
