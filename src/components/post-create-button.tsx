'use client'

import { Icons } from '@/components/icons'
import { buttonVariants, type ButtonProps } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { api } from '@/trpc/react'
import { useRouter } from 'next/navigation'
import * as React from 'react'

type PostCreateButtonProps = ButtonProps

export function PostCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const createPost = api.post.create.useMutation({
    onSuccess: (data) => {
      // Should invalidate the queryKey that loads posts
      setIsLoading(false)
      router.push(`/editor/${data.id}`)
    },
    onError: () => {
      // TODO handle max posts
      // if (response.status === 402) {
      //   return toast({
      //     title: "Limit of 3 posts reached.",
      //     description: "Please upgrade to the PRO plan.",
      //     variant: "destructive",
      //   });
      // }
      setIsLoading(false)
      toast({
        title: 'Something went wrong.',
        description: 'Your post was not created. Please try again.',
        variant: 'destructive'
      })
    }
  })

  async function onClick() {
    setIsLoading(true)

    createPost.mutate({
      title: 'Untitled Post'
    })
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          'cursor-not-allowed opacity-60': isLoading
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className='mr-2 size-4 animate-spin' />
      ) : (
        <Icons.add className='mr-2 size-4' />
      )}
      New post
    </button>
  )
}
