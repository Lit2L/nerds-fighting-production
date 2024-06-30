import { Card } from '../ui/card'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const featureCards = [
  {
    id: 0,
    title: 'Cardio Kickboxing',
    description:
      'Our Cardio classes burn over 1000 calories an hour... no biggie.  Improve your cardiovascular health, increase your strength, flexibility and lots and lots of other things.',
    image: '/assets/8.jpg'
  },
  {
    id: 1,
    title: 'Advanced Striking',
    description:
      'Learn to utilize your entire body as a weapon. We blend the best of Boxing, Kickboxing and Muay Thai. Learn effective martial arts skills and gain the advantage on your feet.',
    image: '/assets/5.jpg'
  },
  {
    id: 2,
    title: 'Supportive Community',
    description:
      'Nothing worth having comes easy. Our team and community understands the struggles that come with training. We embrace the suck together.',
    image: '/assets/6.jpg'
  },
  {
    id: 3,
    title: 'Live a Longer, Healthier, and Enjoyable Life',
    description: 'Your future self will thank you more than you can imagine.',
    image: '/assets/13.jpg'
  }
]
export const Features = () => {
  return (
    <section
      id='features'
      className='container space-y-6 py-8 dark:bg-transparent sm:py-24 md:py-12'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-12 text-center'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Who We Are
        </h2>
        <p className='sm:text-md max-w-[85%] leading-normal text-muted-foreground sm:leading-7'>
          No matter what your goals or skill level, we want to help you get
          there. Our program is designed to create a supportive environment to
          help you grow, stay consistent, and achieve your goals.
        </p>
      </div>
      <div className='flex flex-col gap-16'>
        {featureCards.map((card) => (
          <Card key={card.id} className='flex'>
            {card.id % 2 === 0 ? (
              <>
                <div className='mx-auto w-1/2 '>
                  <Image
                    src={card.image}
                    alt={card.title}
                    className='object-contain'
                    width={300}
                    height={300}
                  />
                </div>
                <div className='flex flex-col'>
                  <div className='flex gap-3'>
                    <CheckCircle className='h-6 w-6 text-orange-500' />
                    <h3 className='text-sm font-semibold'>{card.title}</h3>
                  </div>
                  <p className='text-gray-500'>{card.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className='flex-col'>
                  <div className='flex gap-3'>
                    <CheckCircle className='h-6 w-6 text-orange-500' />
                    <h3 className='text-sm font-semibold'>{card.title}</h3>
                  </div>
                  <p className='text-gray-500'>{card.description}</p>
                </div>
                <div className='mx-auto'>
                  <Image
                    src={card.image}
                    alt={card.title}
                    className='object-contain'
                    width={300}
                    height={300}
                  />
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
