import { CardImg } from './CardImg'
import { ICardModel } from './interfaces'

export const CardLandscape = (props: ICardModel) => (
  <div
    className={`
      ${props.reverse ? 'flex flex-row-reverse' : 'flex'} 
      w-[90vw] gap-x-8
    `}
  >
    <CardImg {...props} />
    <div
      className={`
        ${props.alignStart ? 'items-start' : 'items-center'} 
        flex flex-1 flex-col gap-y-8
      `}
    >
      {props.children}
    </div>
  </div>
)
