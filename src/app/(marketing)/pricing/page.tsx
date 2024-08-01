import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing'
}

export default function PricingPage() {
  return (
    <section className='container relative mt-20 flex w-full items-center justify-center border-4 border-black'>
      <div className='absolute left-1/2 top-1/2 size-full  '>
        <Image
          src='/lunchboxgray1.png'
          alt='Lunchbox'
          height={1200}
          width={1200}
          // layout='fill'
          objectFit='contain'
          className='-z-10'
        />

        <div className='container absolute left-1/2 top-0 mx-auto flex max-h-screen max-w-7xl  flex-col gap-6 py-8 md:translate-y-1/2  md:py-12 lg:py-24'>
          <div className='text-center'>
            <h2 className='font-logo text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
              Nerds Fighting
            </h2>
            {/* <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
                Easy customer management for your membership
              </p> */}
          </div>

          <div className='mx-auto grid w-10/12 max-w-7xl items-start gap-10 rounded-lg border md:grid-cols-[1fr_200px]'>
            <div className='grid gap-6'>
              {/* <h3 className='text-xl font-bold sm:text-2xl'>
                  Nerds Fighting Membership Includes:
                </h3> */}
              <ul className='grid w-full grid-cols-2 gap-3 text-xs text-muted-foreground'>
                <li className='flex items-center'>
                  <Icons.check className='mr-2 size-4' /> All Experience Levels Welcome
                </li>
                <li className='flex items-center'>
                  <Icons.check className='mr-2 size-4' /> Beginner Friendly
                </li>

                <li className='flex items-center'>
                  <Icons.check className='mr-2 size-4' /> Learn Technique & Skill
                </li>
                <li className='flex items-center'>
                  <Icons.check className='mr-2 size-4' /> Full-body workout
                </li>
                <li className='flex items-center'>
                  <Icons.check className='mr-2 size-4' /> Boxing Gloves & Hand Wraps Provided.
                  (Loaners Available)
                </li>
                <li className='flex items-center'>
                  <Icons.check className='mr-2 size-4' /> Team Support for your goals
                </li>
              </ul>
            </div>
          </div>
          <div className='mx-auto flex w-3/4 max-w-5xl items-center justify-between gap-4 border-4 text-center'>
            <div className=''>
              <p className='leading-normal text-muted-foreground sm:leading-7'>
                <strong>You can test the upgrade and won&apos;t be charged.</strong>
              </p>
            </div>
            <div>
              <h4 className='text-3xl font-bold'>$125</h4>
              <p className='text-sm font-medium text-muted-foreground'>Billed Monthly</p>

              <Link href='/login' className={cn(buttonVariants({ size: 'lg' }))}>
                Join Nerds Fighting
              </Link>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  )
}
