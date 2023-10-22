export const Option: React.FC<{
  children: React.ReactNode | string
}> = ({ children }) => (
  <a className="cursor-pointer hover:text-blue-m">{children}</a>
)
