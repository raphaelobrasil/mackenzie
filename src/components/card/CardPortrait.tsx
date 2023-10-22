import { CardImg } from './CardImg'
import { ICardModel } from './interfaces'

export const CardPortrait = (props: ICardModel) => (
  <div
    className={`
      ${props.reverse ? 'flex flex-col-reverse' : 'flex flex-col'}
      ${
        props.isMobile
          ? 'max-md-3:w-[80vw] max-sm:w-[70vw]'
          : 'max-md-3:w-[40vw]'
      }
      w-[45vw] gap-y-8
    `}
  >
    <CardImg {...props} />
    <div
      className={`
        ${props.alignStart ? 'items-start' : 'items-center'} 
        flex flex-col gap-y-8
      `}
    >
      {props.children}
    </div>
  </div>
)
