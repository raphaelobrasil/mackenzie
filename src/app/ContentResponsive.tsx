import { CardRoot, ButtonRoot } from '@components/index'
import { CardListResponsive } from './mock'
import { CardButton } from './enum'

export const ContentResponsive = () => (
  <main className="absolute left-12 top-[200px] flex flex-col gap-y-8 pb-8 md:hidden">
    {CardListResponsive.map((data, key) => (
      <CardRoot.Portrait
        url={data.img}
        alt={data.alt}
        col
        isMobile
        key={`Portrait-${key}`}
      >
        {data?.title && <CardRoot.title title={data.title} />}
        <CardRoot.Description description={data.description} />
        {!!data?.hasButton && (
          <ButtonRoot.NoFill onClick={() => console.log(CardButton.MORE)}>
            {CardButton.MORE}
          </ButtonRoot.NoFill>
        )}
      </CardRoot.Portrait>
    ))}
  </main>
)
