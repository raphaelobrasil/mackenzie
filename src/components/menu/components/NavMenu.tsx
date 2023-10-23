import { OptionsMenu } from '../options.enum'
import { SubComponent } from './'

export const NavMenu = () => (
  <nav className="flex flex-1 items-center justify-end gap-x-6 max-md:hidden">
    {Object.values(OptionsMenu).map((description, key) => (
      <SubComponent.Option key={description + key}>
        {description}
      </SubComponent.Option>
    ))}
    <SubComponent.LoginButton />
  </nav>
)
