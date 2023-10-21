export default function Home() {
  return (
    <div className="relative flex w-full flex-col  p-1 py-4 max-md:p-0 max-md:py-0">
      <div className="flex min-h-[70vh] flex-1 rounded-xl bg-red-m p-12 py-6 max-md:rounded-none">
        <aside>MENU</aside>
        <h3>TITULO</h3>
      </div>
      <main className="absolute left-1/2 top-45">
        <div>Card 1</div>
        <div>Card 2</div>
        <div>Card 3</div>
        <div>Card 4</div>
      </main>
    </div>
  )
}
