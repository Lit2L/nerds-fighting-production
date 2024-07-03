import { About } from '@/components/templates/about'
import { Community } from '@/components/templates/community'
// import { FlowState } from '@/components/templates/flow-state'
import { Hero } from '@/components/templates/hero'
import { Schedule } from '@/components/templates/schedule'

export default function IndexPage() {
  return (
    <div className='relative min-h-screen w-full bg-[radial-gradient(circle_500px_at_50%_200px,#181818,transparent)] '>
      <Hero />
      <About />
      <Schedule />
      {/* <FlowState /> */}
      <Community />
    </div>
  )
}
