export const Option: React.FC<{
  children: React.ReactNode | string
}> = ({ children }) => (
  <a className="cursor-pointer select-none hover:text-blue-m">{children}</a>
)
