import { options } from '../options.const'
import { SubComponent } from './'

export const NavMenu = () => (
  <nav className="flex flex-1 justify-end gap-x-16 max-md:hidden">
    {options.map((description, key) => (
      <SubComponent.Option key={description + key}>
        {description}
      </SubComponent.Option>
    ))}
  </nav>
)
