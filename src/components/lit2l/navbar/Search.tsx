'use client'

import useCountries from '@/hooks/useCountries'
import useSearchModal from '@/hooks/useSearchModal'
import { differenceInDays } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
  const searchModal = useSearchModal()
  const params = useSearchParams()
  const { getByValue } = useCountries()

  const locationValue = params?.get('locationValue')

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label
    }
    return 'Search by location'
  }, [getByValue, locationValue])

  return (
    <div
      onClick={searchModal.onOpen}
      className='w-full cursor-pointer
        rounded-full
        border-[1px]
        border-gray-700
        py-2
        shadow-sm
        transition
        hover:shadow-md
        md:w-auto
      '
    >
      <div
        className='
          flex
          flex-row
          items-center
          justify-between
        '
      >
        <div
          className='
            px-6
            text-sm
            font-semibold
          '
        >
          {locationLabel}
        </div>
        <div
          className='
            hidden
            flex-1
            border-x-[1px]
            px-6
            text-center
            text-sm
            font-semibold
            sm:block
          '
        ></div>
        <div
          className='
            flex
            flex-row
            items-center
            gap-3
            pl-6
            pr-2
            text-sm
            text-gray-600
          '
        >
          <div className='hidden sm:block'></div>
          <div
            className='
              rounded-full
              bg-rose-500
              p-2
              text-white
            '
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
