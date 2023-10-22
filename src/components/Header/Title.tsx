import { title } from './title.const'

export const Title = () => (
  <h3
    className="
      text-center text-5xl font-bold 
      max-md:py-20 max-sm:text-4xl
    "
  >
    <strong className="text-black">{title.DescriptionBold}</strong>
    {` ${title.DescriptionNormal}`}
  </h3>
)
