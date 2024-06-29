import { CheckCircle } from 'lucide-react'

export const Features = () => {
  return (
    <section
      id='features'
      className='container space-y-6 py-8 dark:bg-transparent sm:py-24 md:py-12'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Who We Are
        </h2>
        <p className='sm:text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7'>
          No matter what your goals or skill level we want to help you get
          there. Our program was designed to create a supportive environment to
          help you grow, stay consistent and achieve your goals.
        </p>
      </div>
      <div className='mt-12 grid grid-cols-2 gap-12'>
        <div className='space-y-2'>
          <div className='flex'>
            <CheckCircle className='h-6 w-6 text-orange-500' />
            <h3 className='text-sm font-semibold'>Cardio Kickboxing</h3>
          </div>
          <p className='text-gray-500'>
            Our Cardio Kickboxing classes only burn over a 1000 calories/hr. No
            biggie. Improve your cardiovascular health, increase your strength,
            flexibility and lots and lots of other things.
          </p>
        </div>
        <div className='space-y-2'>
          <CheckCircle className='h-6 w-6 text-orange-500' />
          <h3 className='text-md font-semibold'>Advanced Striking </h3>
          <p className='text-gray-500 '>
            Learn to utilize your entire body as a weapon. We blend the best of
            Boxing, Kickboxing and Muay Thai. Learn effective martial arts
            skills and gain the advantage on your feet.
          </p>
        </div>
        <div className='space-y-2'>
          <CheckCircle className='h-6 w-6 text-orange-500' />
          <h3 className='text-sm font-semibold'>Supportive Community</h3>
          <p className='text-gray-500'>
            Nothing worth having comes easy. Our team and community understands
            the struggles that come with training. We embrace the suck together.
          </p>
        </div>
        <div className='space-y-2'>
          <CheckCircle className='h-6 w-6 text-orange-500' />
          <h3 className='text-sm font-semibold'>
            Live a Longer, Healthier, and Enjoyable Life
          </h3>
          <p className='text-gray-500'>
            Your future self will thank you more than you can imagine.
          </p>
        </div>
      </div>
    </section>
  )
}
