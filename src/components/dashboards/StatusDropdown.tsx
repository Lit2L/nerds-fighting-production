'use client'

import { changePassStatus } from '../../app/(dashboard)/dashboard/actions'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { FreePassStatus } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

const LABEL_MAP: Record<keyof typeof FreePassStatus, string> = {
  claimed: 'Claimed',
  unclaimed: 'Unclaimed',
  fulfilled: 'Fulfilled'
}

const StatusDropdown = ({
  id,
  passStatus
}: {
  id: string
  passStatus: FreePassStatus
}) => {
  const router = useRouter()

  const { mutate } = useMutation({
    mutationKey: ['change-pass-status'],
    mutationFn: changePassStatus,
    onSuccess: () => router.refresh()
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex w-52 items-center justify-between'
        >
          {LABEL_MAP[passStatus]}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='p-0'>
        {Object.keys(FreePassStatus).map((status) => (
          <DropdownMenuItem
            key={status}
            className={cn(
              'flex cursor-default items-center gap-1 p-2.5 text-sm hover:bg-zinc-100',
              {
                'bg-zinc-100': passStatus === status
              }
            )}
            onClick={() => mutate({ id, newStatus: status as FreePassStatus })}
          >
            <Check
              className={cn(
                'mr-2 h-4 w-4 text-primary',
                passStatus === status ? 'opacity-100' : 'opacity-0'
              )}
            />
            {LABEL_MAP[status as FreePassStatus]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default StatusDropdown
