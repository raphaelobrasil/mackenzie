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
        {data?.title && (
          <div className="flex w-full justify-start">
            <CardRoot.title title={data.title} />
          </div>
        )}
        <CardRoot.Description description={data.description} />
        {!!data?.hasButton && (
          <div className="flex w-full justify-end">
            <ButtonRoot.NoFill onClick={() => console.log(CardButton.MORE)}>
              {CardButton.MORE}
            </ButtonRoot.NoFill>
          </div>
        )}
      </CardRoot.Portrait>
    ))}
  </main>
)
