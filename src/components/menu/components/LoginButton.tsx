import { ButtonRoot } from '@components/index'
import { LOGIN } from '../options.enum'

export const LoginButton = () => (
  <ButtonRoot.WithFill onClick={() => console.log(LOGIN)}>
    {LOGIN}
  </ButtonRoot.WithFill>
)
