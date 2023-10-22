export const CardTitle: React.FC<{
  title: string | React.ReactNode
  fontLarge?: boolean
}> = ({ title, fontLarge }) => (
  <h1 className={`${fontLarge ? 'text-4xl' : 'text-2xl'} font-bold text-black`}>
    {title}
  </h1>
)
