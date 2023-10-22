export const CardDescription: React.FC<{
  description: string
  colorVariant?: boolean
}> = ({ description, colorVariant }) => (
  <p className={`${colorVariant ? 'text-white' : 'text-grey-m'}`}>
    {description}
  </p>
)
