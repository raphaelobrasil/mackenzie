import { render, screen } from '@testing-library/react'
import App from '../src/app/page'
import { CardButton } from '../src/app/Content/enum'
import { title } from '../src/components/header/title.const'
import { OptionsMenu, LOGIN } from '../src/components/menu/options.enum'
import { CardList, CardListResponsive } from '../src/app/Content/mock'

describe('App', () => {
  it('Should correctly render the page', () => {
    render(<App />)

    const AllMoreElement = screen.queryAllByText(CardButton.MORE).length
    const AllLoginElement = screen.queryAllByText(LOGIN).length
    const AllMenuOptions = Object.values(OptionsMenu).map(
      (description) => screen.queryAllByText(description).length,
    )
    const getTitleBold = screen.getByText(title.DescriptionBold)
    const getTitleNormal = screen.getByText(title.DescriptionNormal)

    expect(AllMoreElement).toBeGreaterThan(0)
    expect(AllLoginElement).toBeGreaterThan(0)
    AllMenuOptions.forEach((option) => expect(option).toBeGreaterThan(0))
    expect(getTitleBold).toBeInTheDocument()
    expect(getTitleNormal).toBeInTheDocument()
  })

  it('Should correctly render cards', async () => {
    render(<App />)

    const CardA = screen.getByText(CardList.itemA.description)
    const CardB = screen.getByText(CardList.itemB.description)
    const CardC = screen.getByText(CardList.itemC.description)
    const CardD = screen.getByText(CardList.itemD.description)
    const CardInMobile = screen.getByText(CardListResponsive[1].description)

    expect(CardA).toBeInTheDocument()
    expect(CardB).toBeInTheDocument()
    expect(CardC).toBeInTheDocument()
    expect(CardD).toBeInTheDocument()
    expect(CardInMobile).toBeInTheDocument()
  })
})
