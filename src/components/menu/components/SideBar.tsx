import { OptionsMenu } from '../options.enum'
import { SubComponent } from './'

export const SideBar: React.FC<{ show: boolean }> = ({ show }) => (
  <nav
    className={`
      fixed left-0 top-0 z-10 flex h-full w-[45vw] flex-col gap-y-4
    bg-red-m px-6 py-20 text-white duration-200
      max-mdx:w-[55vw] max-sm:w-[65vw] max-smx:w-[75vw] md:hidden
      ${show ? 'translate-x-0 shadow-sideBar' : '-translate-x-full'} 
    `}
  >
    <SubComponent.LoginButton />
    {Object.values(OptionsMenu).map((description, key) => (
      <SubComponent.Option key={description + key}>
        {description}
      </SubComponent.Option>
    ))}
  </nav>
)
