import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CardButton } from '../src/app/Content/enum'
import { ContentResponsive } from '../src/app/Content/ContentResponsive'
import { Content } from '../src/app/Content/Content'
import { LoginButton } from '../src/components/menu/components/LoginButton'
import { LOGIN } from '../src/components/menu/options.enum'

describe('onClicks', () => {
  it('Should test "Learn More" buttons on mobile cards', async () => {
    render(<ContentResponsive />)

    const buttons = screen.getAllByText(CardButton.MORE)
    const buttonToClick = buttons[0]

    await userEvent.click(buttonToClick)
  })

  it('Should test "Learn More" buttons on desktop cards', async () => {
    render(<Content />)

    const buttons = screen.getAllByText(CardButton.MORE)

    for await (const buttonToClick of buttons) {
      await userEvent.click(buttonToClick)
    }
  })

  it('Should test "Login" buttons on desktop cards', async () => {
    render(<LoginButton />)

    const buttons = screen.getAllByText(LOGIN)

    for await (const buttonToClick of buttons) {
      await userEvent.click(buttonToClick)
    }
  })
})
