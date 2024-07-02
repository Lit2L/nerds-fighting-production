import { DashboardHeader } from '@/components/header'
import { DashboardShell } from '@/components/shell'
import { getCurrentUser } from '@/lib/session'
import { authOptions } from '@/server/auth'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'UserPass',
  description: 'Claim your free 2-day pass.'
}

export default async function UserPassPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading='Claim your free 2-day pass.'
        text='Enter your name to claim your free 2-day pass.'
      />
      <div className='grid gap-10'></div>
    </DashboardShell>
  )
}
