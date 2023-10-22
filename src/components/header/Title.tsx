import { title } from './title.const'

export const Title = () => (
  <h3
    className="
      pt-6 text-center text-5xl font-bold
      max-md:pt-14 max-sm:text-4xl
    "
  >
    <strong className="text-black">{title.DescriptionBold}</strong>
    {` ${title.DescriptionNormal}`}
  </h3>
)
