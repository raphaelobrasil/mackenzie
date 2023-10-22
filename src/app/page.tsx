'use client'
import { Menu, Header } from '@components/index'
import { Content, ContentResponsive } from './Content'

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
      <Content />
      <ContentResponsive />
    </div>
  )
}
