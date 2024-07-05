import { Quote } from 'lucide-react'

export const Community = () => {
  return (
    <section
      id='open-source'
      className='container bg-[radial-gradient(circle_500px_at_50%_450px,#181818,transparent)] py-8 md:py-12 lg:py-24 '
    >
      <div className='mx-auto flex max-w-[85%] flex-col items-center justify-center gap-9 text-center '>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          What is Flow State?{' '}
        </h2>
        <strong className='text-center font-heading text-2xl font-bold'>
          Mushin (無心) - The Concept of “No-Mind”
        </strong>
        <span className='flex gap-3'>
          <Quote />
          <strong>
            &quot;I do not hit; it hits all by itself.&quot; - Bruce Lee
          </strong>
          <Quote />
        </span>
        <p className='leading-normal text-slate-300 sm:text-lg sm:leading-7'>
          This quote reflects our philosophy of martial arts, emphasizing the
          idea of achieving a state of flow or “no-mind” (mushin) where actions
          are executed without conscious thought. In this state, the body moves
          naturally and instinctively, performing techniques with precision and
          efficiency. This concept is central to Lee&apos;s approach to martial
          arts, where mastery involves becoming so skilled and attuned that
          movements become automatic responses to stimuli.
        </p>
        <p className='leading-normal dark:text-slate-300 sm:text-lg sm:leading-7'>
          Our expertly crafted programs are designed to help you achieve peak
          performance by immersing you in the flow state—where your mind, body,
          and spirit unite seamlessly, allowing you to execute techniques and
          skilled reactions with precision and confidence. Whether you&apos;re a
          beginner or an advanced practitioner, Flow State Kickboxing is
          dedicated to guiding you on a path of continuous growth,
          self-discovery, and skill development. Join us and discover the
          transformative power of flow state in martial arts.
        </p>
      </div>
    </section>
  )
}
