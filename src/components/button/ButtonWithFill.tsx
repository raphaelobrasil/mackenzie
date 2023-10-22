export const ButtonWithFill: React.FC<{
  children: string
  onClick: () => void
  outline?: boolean
}> = ({ children, onClick, outline }) => (
  <div
    onClick={onClick}
    className={`
      w-fit cursor-pointer select-none rounded-md border
      border-white py-2 pl-12 pr-3 font-bold
      ${
        outline
          ? 'bg-red-m text-white hover:bg-white hover:text-red-m'
          : 'bg-white text-red-m hover:bg-red-m hover:text-white'
      }      
    `}
  >
    {children}
  </div>
)
