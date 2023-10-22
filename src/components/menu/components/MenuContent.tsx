import { useState, Fragment } from 'react'
import { SubComponent } from './'

export const MenuContent = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false)

  return (
    <Fragment>
      <SubComponent.KebabMenu
        onClick={() => setShowSideBar((prev) => !prev)}
        changeIcon={showSideBar}
      />
      <SubComponent.NavMenu />
      <SubComponent.SideBar show={showSideBar} />
    </Fragment>
  )
}
