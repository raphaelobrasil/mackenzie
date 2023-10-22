export const ButtonNoFill: React.FC<{
  children: string
  onClick: () => void
  inverseTheme?: boolean
}> = ({ children, onClick, inverseTheme }) => (
  <div
    onClick={onClick}
    className={`
      w-fit cursor-pointer rounded-md border border-transparent 
      py-2 pl-12 pr-3 font-bold
      ${
        inverseTheme
          ? 'text-white hover:border-white '
          : 'text-red-m  hover:border-red-m '
      }
    `}
  >
    {children}
  </div>
)
