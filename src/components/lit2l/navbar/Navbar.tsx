'use client'

import Categories from './Categories'
import Search from './Search'
import UserMenu from './UserMenu'
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import useSetupBusiness from '@/hooks/useSetupBusiness'
import { SafeUser } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

interface NavbarProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter()
  const registerModal = useRegisterModal()
  const bussinessModal = useSetupBusiness()
  const loginModal = useLoginModal()
  const navBarItems = [
    { id: 0, name: 'Home', link: '/' },
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Contact', link: '/contact' }
  ]

  const onBusiness = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }
    bussinessModal.onOpen()
  }, [currentUser, loginModal, bussinessModal])

  return (
    <div className='fixed z-10 w-full border-none  text-gray-400  shadow-sm outline-none '>
      <div className='flex flex-row items-center justify-between bg-[#2C2C2C] px-4 py-3 sm:px-20'>
        <div className='cursor-pointer' onClick={() => router.push('/')}>
          <Image
            onClick={() => router.push('/')}
            className='hidden cursor-pointer md:block'
            src='/images/companylogo.png'
            height='200'
            width='200'
            alt='Logo'
          />
        </div>
        <div>
          <Search />
        </div>

        <UserMenu currentUser={currentUser} />
      </div>
      <Categories />
    </div>
  )
}

export default Navbar
