import { CardRoot, ButtonRoot } from '@components/index'
import { CardList } from './mock'
import { CardButton } from './enum'

const { itemA, itemB, itemC, itemD } = CardList

export const Content = () => (
  <main className="absolute left-12 top-[200px] flex flex-col gap-y-8 pb-8 max-md:hidden">
    <CardRoot.Landscape url={itemA.img} alt={itemA.alt}>
      <CardRoot.Description description={itemA.description} colorVariant />
      <ButtonRoot.WithFill onClick={() => console.log(CardButton.MORE)}>
        {CardButton.MORE}
      </ButtonRoot.WithFill>
    </CardRoot.Landscape>
    <div className="flex gap-x-8">
      <CardRoot.Portrait url={itemB.img} alt={itemB.alt} col reverse>
        <CardRoot.Description description={itemB.description} />
      </CardRoot.Portrait>
      <CardRoot.Portrait url={itemC.img} alt={itemC.alt} col>
        <CardRoot.Description description={itemC.description} />
      </CardRoot.Portrait>
    </div>
    <CardRoot.Landscape url={itemD.img} alt={itemD.alt} reverse alignStart>
      <CardRoot.title title={itemD.title} fontLarge />
      <CardRoot.Description description={itemD.description} />
      <ButtonRoot.NoFill onClick={() => console.log(CardButton.MORE)}>
        {CardButton.MORE}
      </ButtonRoot.NoFill>
    </CardRoot.Landscape>
  </main>
)
