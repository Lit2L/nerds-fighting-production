'use client'

import MenuBox from './MenuBox'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import useSetupBusiness from '@/hooks/useSetupBusiness'
import { SafeUser } from '@/types'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter()
  const divRef = useRef<HTMLDivElement>(null)
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const businessModal = useSetupBusiness()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value)
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }

    businessModal.onOpen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginModal, businessModal, currentUser])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => router.push('/')}
          className='cursor-pointer text-sm font-semibold hover:text-white'
        >
          Home
        </div>
        <div
          onClick={() => router.push('/about')}
          className='cursor-pointer text-sm font-semibold hover:text-white'
        >
          About
        </div>
        <div
          onClick={onRent}
          className='
            hidden
            cursor-pointer
            rounded-full
            px-4
            py-3
            text-sm
            font-semibold
            transition
            hover:bg-neutral-100
            md:block
          '
        >
          Your Bussiness
        </div>
        <div
          onClick={toggleOpen}
          className='
          flex
          cursor-pointer
          flex-row
          items-center
          gap-3
          rounded-full
          border-[1px]
          border-neutral-200
          p-4
          transition
          hover:shadow-md
          md:px-2
          md:py-1
          '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {currentUser ? (
              <img
                src={currentUser.image as string}
                alt='user'
                className='h-8 w-8 rounded-full'
              />
            ) : (
              'Menu'
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={divRef}
          className='
            absolute
            right-0
            top-12
            w-[40vw]
            overflow-hidden
            rounded-xl
            bg-white
            text-sm
            shadow-md
            md:w-3/4
          '
        >
          <div className='flex cursor-pointer flex-col'>
            {currentUser ? (
              <>
                <MenuBox
                  label='Upcoming'
                  onClick={() => router.push('/upcoming')}
                />
                <MenuBox
                  label='My favorites'
                  onClick={() => router.push('/favorites')}
                />
                <MenuBox
                  label='My reservations'
                  onClick={() => router.push('/reservations')}
                />
                <MenuBox
                  label='My business'
                  onClick={() => router.push('/business')}
                />
                <MenuBox
                  label='Create your business'
                  onClick={businessModal.onOpen}
                />
                <hr />
                <MenuBox label='Logout' onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuBox label='Login' onClick={loginModal.onOpen} />
                <MenuBox label='Sign up' onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
