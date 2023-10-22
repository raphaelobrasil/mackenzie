export const KebabMenu: React.FC<{
  onClick: () => void
  changeIcon: boolean
}> = ({ onClick, changeIcon }) => (
  <a
    onClick={onClick}
    className={`
      ${
        changeIcon
          ? 'fixed bg-close-b hover:bg-close-h'
          : 'absolute bg-kebab-b hover:bg-kebab-h'
      } 
      z-20 h-[16px] w-[16px] cursor-pointer select-none
      bg-cover bg-center bg-no-repeat 
      md:hidden
    `}
  />
)
