export const Option: React.FC<{
  children: React.ReactNode | string
}> = ({ children }) => (
  <a
    className="cursor-pointer select-none whitespace-nowrap hover:text-blue-m"
    href={`#${children}`}
  >
    {children}
  </a>
)
