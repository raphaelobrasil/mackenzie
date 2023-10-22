import Image from 'next/image'
import { ICardImg } from './interfaces'

export const CardImg = ({ url, alt, col }: ICardImg) => (
  <Image
    src={`/imgs/${url}`}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: `${col ? '100%' : '50%'}`, height: 'auto' }}
  />
)
