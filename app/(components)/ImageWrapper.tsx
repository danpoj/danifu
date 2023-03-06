import cn from '@/libs/classnames'
import { ImageWrapperProps } from '@/typings'
import Image from 'next/image'

const ImageWrapper = ({
  image,
  onImageClicked,
  onLoadingComplete,
  isLoading,
}: ImageWrapperProps) => {
  return (
    <Image
      onClick={onImageClicked}
      alt='pic'
      src={image.url}
      width={image.width}
      height={image.height}
      placeholder='blur'
      blurDataURL='data:image/gif;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAQAAAAnZu5uAAAAEElEQVR42mOM4mGAAkYSmABAYAIEPiBLmAAAAABJRU5ErkJggg=='
      className={cn(
        'duration-500 ease-in-out cursor-pointer',
        isLoading ? 'scale-105 blur-sm' : 'scale-100'
      )}
      onLoadingComplete={onLoadingComplete}
    />
  )
}

export default ImageWrapper
