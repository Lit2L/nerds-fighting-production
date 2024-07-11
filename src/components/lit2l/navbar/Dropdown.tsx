import MenuItem from './MenuItem'
import React from 'react'

interface Submenu {
  title: string
  url?: string
  submenu?: Submenu[]
}

interface DropdownProps {
  submenus: Submenu[]
  dropdown: boolean
  depthLevel: number
}

const Dropdown: React.FC<DropdownProps> = ({
  submenus,
  dropdown,
  depthLevel
}) => {
  const updatedDepthLevel = depthLevel + 1
  const dropdownClass = updatedDepthLevel > 1 ? 'dropdown-submenu' : ''

  return (
    <ul
      className={` dropdown text-normal absolute left-0 top-[1.6rem] z-20 hidden  min-w-[12rem] list-none overflow-hidden rounded-md border-none bg-white  text-left shadow-lg   ${dropdownClass} ${
        dropdown ? 'show' : ''
      }`}
    >
      {submenus.map((submenu, index) => (
        <MenuItem items={submenu} key={index} depthLevel={updatedDepthLevel} />
      ))}
    </ul>
  )
}

export default Dropdown
