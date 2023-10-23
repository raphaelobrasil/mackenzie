import { Title } from './Title'

export const Header: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <div
    className="
      flex min-h-[450px] flex-1 flex-col 
      rounded-xl bg-red-m p-12 py-6 text-white 
      max-md:w-full max-md:rounded-none max-sm:min-h-[350px] max-smx:p-6
    "
  >
    {children}
    <Title />
  </div>
)
