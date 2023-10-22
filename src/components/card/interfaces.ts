export interface ICardImg {
  url: string
  alt: string
  col?: boolean
}

export interface ICardModel extends ICardImg {
  reverse?: boolean
  children: React.ReactNode
  isMobile?: boolean
  alignStart?: boolean
}
