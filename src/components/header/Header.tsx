import { Title } from './Title'

export const Header: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <div
    className="
      flex flex-1 flex-col rounded-xl 
      bg-red-m p-12 py-6 text-white max-xl:min-h-[70vh] 
      max-md-2:min-h-[70vh] max-md:min-h-[50vh] max-md:w-full
      max-md:rounded-none max-smx:p-6 xl:min-h-[80vh]
    "
  >
    {children}
    <Title />
  </div>
)
