import { Menu, Header } from '@components/index'

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
      <main className="absolute left-1/2 top-45">
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
      </main>
    </div>
  )
}
