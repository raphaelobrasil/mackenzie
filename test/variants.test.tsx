/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonNoFill } from '../src/components/button/ButtonNoFill'
import { ButtonWithFill } from '../src/components/button/ButtonWithFill'
import { CardPortrait } from '../src/components/card/CardPortrait'
import { KebabMenu } from '../src/components/menu/components/KebabMenu'
import { MenuContent } from '../src/components/menu/components/MenuContent'

describe('Variants', () => {
  const fn = jest.fn()
  it('Should render the ButtonNoFill variant', () => {
    const text = 'test'
    const tags = 'text-white hover:border-white'

    render(
      <ButtonNoFill onClick={fn} inverseTheme>
        {text}
      </ButtonNoFill>,
    )
    const buttonElement = screen.getByText(text)

    expect(buttonElement).toHaveClass(tags)
  })

  it('Should render the ButtonWithFill variant', () => {
    const text = 'test'
    const tags = 'bg-red-m text-white hover:bg-white hover:text-red-m'

    render(
      <ButtonWithFill onClick={fn} outline>
        {text}
      </ButtonWithFill>,
    )
    const buttonElement = screen.getByText(text)

    expect(buttonElement).toHaveClass(tags)
  })

  it('Should render the CardPortrait variant', () => {
    const text = 'test'
    const tags = 'items-start'

    render(
      <CardPortrait url={''} alt={''} alignStart>
        {text}
      </CardPortrait>,
    )
    const cardElement = screen.getByText(text)

    expect(cardElement).toHaveClass(tags)
  })

  it('Should render the KebabMenu variant', () => {
    const tags = 'fixed bg-close-b hover:bg-close-h'

    const { container } = render(<KebabMenu onClick={fn} changeIcon />)

    expect(container.querySelector('a')?.className).toContain(tags)
  })

  it('Should render the MenuContent variant', () => {
    const { container } = render(<MenuContent />)
    const tagsDefault = 'bg-kebab-b'
    const tagsVariant = 'bg-close-h'
    const kebabElement = container.querySelector(`.${tagsDefault}`)

    kebabElement && fireEvent.click(kebabElement)
    expect(kebabElement?.className).toContain(tagsVariant)

    kebabElement && fireEvent.click(kebabElement)
    expect(kebabElement?.className).toContain(tagsDefault)
  })
})
