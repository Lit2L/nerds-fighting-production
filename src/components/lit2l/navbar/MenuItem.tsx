'use client'

import Dropdown from './Dropdown'
import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'

interface MenuItem {
  title: string
  url?: string
  submenu?: MenuItem[]
}

interface MenuItemsProps {
  items: MenuItem
  depthLevel: number
  selected?: boolean
}

const MenuItems: React.FC<MenuItemsProps> = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  const closeDropdown = () => {
    dropdown && setDropdown(false)
  }

  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: items.title
    }

    if (params?.get('category') === items.title) {
      delete updatedQuery.category
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery
      },
      { skipNull: true }
    )

    router.push(url)
  }, [items.title, router, params])

  return (
    <li
      className='relative flex flex-col'
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              items.title
            ) : (
              <div className='flex  items-center  gap-2 text-slate-200 '>
                {items.title} {depthLevel === 0 && <AiOutlineDown size={16} />}
              </div>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
          >
            {items.title}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <div
          className='w-full cursor-pointer   px-2  py-2  hover:bg-[#f2f2f2]'
          onClick={handleClick}
        >
          {items.title}
        </div>
      )}
    </li>
  )
}

export default MenuItems
