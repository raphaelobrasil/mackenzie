'use client'
import { Menu, Header, ButtonRoot } from '@components/index'
import Image from 'next/image'
import { CardList, CardListResponsive } from './mock'

export default function Home() {
  return (
    <div
      className="
        relative flex w-full flex-col p-1 py-4 
        max-md:p-0 max-md:py-0
      "
    >
      <Header>
        <Menu />
      </Header>
      <main className="absolute left-12 top-[200px] flex flex-col gap-y-8 pb-8 max-md:hidden">
        <div className="flex w-[90vw] gap-x-8">
          <Image
            src={`/imgs/${CardList[0].img}`}
            alt="Com mais de 150 anos de história"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
          />
          <div className="flex flex-col items-center gap-y-8">
            <p className="text-white">{CardList[0].description}</p>
            <ButtonRoot.WithFill onClick={() => console.log('login')} outline>
              SAIBA MAIS
            </ButtonRoot.WithFill>
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="max-md-3:w-[40vw] flex w-[45vw] flex-col-reverse gap-y-8">
            <Image
              src={`/imgs/${CardList[1].img}`}
              alt="Com mais de 150 anos de história"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="flex flex-col items-center gap-y-8">
              <p className="text-grey-m">{CardList[1].description}</p>
            </div>
          </div>
          <div className="max-md-3:w-[40vw] flex w-[45vw] flex-col gap-y-8">
            <Image
              src={`/imgs/${CardList[2].img}`}
              alt="Com mais de 150 anos de história"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="flex flex-col items-center gap-y-8">
              <p className="text-grey-m">{CardList[2].description}</p>
            </div>
          </div>
        </div>
        <div className="flex w-[90vw] flex-row-reverse gap-x-8">
          <Image
            src={`/imgs/${CardList[3].img}`}
            alt="Com mais de 150 anos de história"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
          />
          <div className="flex flex-col items-start gap-y-8">
            <h1 className="text-4xl font-bold text-black">
              {CardList[3]?.title}
            </h1>
            <p className="text-grey-m">{CardList[3].description}</p>
            <ButtonRoot.NoFill onClick={() => console.log('SAIBA MAIS')}>
              SAIBA MAIS
            </ButtonRoot.NoFill>
          </div>
        </div>
      </main>
      <main className="absolute left-12 top-[200px] flex flex-col gap-y-8 pb-8 md:hidden">
        <div className="max-md-3:w-[80vw] flex w-[45vw] flex-col gap-y-8 max-sm:w-[70vw]">
          <Image
            src={`/imgs/${CardListResponsive[0].img}`}
            alt="Com mais de 150 anos de história"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-2xl font-bold text-black">
              {CardListResponsive[0]?.title}
            </h1>
            <p className="text-grey-m">{CardListResponsive[0].description}</p>
            <ButtonRoot.NoFill onClick={() => console.log('SAIBA MAIS')}>
              SAIBA MAIS
            </ButtonRoot.NoFill>
          </div>
        </div>

        <div className="max-md-3:w-[80vw] flex w-[45vw] flex-col gap-y-8 max-sm:w-[70vw]">
          <Image
            src={`/imgs/${CardListResponsive[1].img}`}
            alt="Com mais de 150 anos de história"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="flex flex-col items-center gap-y-8">
            <p className="text-grey-m">{CardListResponsive[1].description}</p>
          </div>
        </div>

        <div className="max-md-3:w-[80vw] flex w-[45vw] flex-col gap-y-8 max-sm:w-[70vw]">
          <Image
            src={`/imgs/${CardListResponsive[2].img}`}
            alt="Com mais de 150 anos de história"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="flex flex-col items-center gap-y-8">
            <p className="text-grey-m">{CardListResponsive[2].description}</p>
          </div>
        </div>

        <div className="max-md-3:w-[80vw] flex w-[45vw] flex-col gap-y-8 max-sm:w-[70vw]">
          <Image
            src={`/imgs/${CardListResponsive[3].img}`}
            alt="Com mais de 150 anos de história"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-2xl font-bold text-black">
              {CardListResponsive[3]?.title}
            </h1>
            <p className="text-grey-m">{CardListResponsive[3].description}</p>
            <ButtonRoot.NoFill onClick={() => console.log('SAIBA MAIS')}>
              SAIBA MAIS
            </ButtonRoot.NoFill>
          </div>
        </div>
      </main>
    </div>
  )
}
