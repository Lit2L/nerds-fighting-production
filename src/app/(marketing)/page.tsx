import { About } from '@/templates/about'
// import Bookings from '@/templates/bookings'
import { Hero } from '@/templates/hero'
import Schedule from '@/templates/schedule'

export default function IndexPage() {
  return (
    <div className='relative min-h-screen w-full bg-[radial-gradient(circle_500px_at_50%_350px,#181818,transparent)] '>
      <Hero />
      <About />
      <Schedule />
      {/* <Bookings /> */}
    </div>
  )
}
