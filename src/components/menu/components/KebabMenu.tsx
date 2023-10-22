export const KebabMenu: React.FC<{
  onClick: () => void
  changeIcon: boolean
}> = ({ onClick, changeIcon }) => (
  <a
    onClick={onClick}
    className={`
      ${
        changeIcon
          ? 'bg-close-b hover:bg-close-h'
          : 'bg-kebab-b hover:bg-kebab-h'
      } 
      z-20 h-[16px] w-[16px] cursor-pointer 
      bg-cover bg-center bg-no-repeat 
      max-md:absolute md:hidden
    `}
  />
)
