import { AspectRatio } from '../ui/aspect-ratio'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const featureCards = [
  {
    id: 0,
    title: 'Quality Training',
    description:
      'Our Cardio classes burn over 1000 calories an hour... no biggie.  Improve your cardiovascular health, increase your strength, flexibility and lots and lots of other things.',
    image: '/assets/8.jpg',
    icon: '🥷🥋🏅🏆🏊🏄‍♀️'
  },
  {
    id: 1,
    title: 'Training For All',
    description:
      'Learn to utilize your entire body as a weapon. We blend the best of Boxing, Kickboxing and Muay Thai. Learn effective martial arts skills and gain the advantage on your feet.',
    image: '/assets/10.jpg'
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
    image: '/assets/seniorkickboxer.png'
  }
]
export const About = () => {
  return (
    <section
      id='features'
      className='container mx-auto pt-12 dark:bg-[#412618] '
    >
      <div className='mx-auto my-12 flex max-w-[58rem] flex-col items-center space-y-12 text-center'>
        <h2 className='font-heading text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl'>
          Who We Are
        </h2>
        <p className='sm:text-md mb-12 max-w-[85%] font-heading leading-normal text-muted-foreground sm:leading-7'>
          TigerClub Kickboxing has a vision to bring quality martial arts
          training to all people of all fitness and skill levels. No matter what
          your goals or skill level, we want to help you get there. Our program
          is designed to create a supportive environment to help you grow, stay
          consistent, and achieve your goals.
        </p>
      </div>
      <div className='mx-auto flex flex-col gap-16'>
        {featureCards.map((card) => (
          <div
            key={card.id}
            className='mx-auto flex items-center justify-start gap-12 border-x px-9'
          >
            {card.id % 2 === 0 ? (
              <>
                <div className='w-[450px]'>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      className='rounded-lg object-cover'
                      layout='fill'
                    />
                  </AspectRatio>
                </div>
                <div className='font flex w-[300px] flex-col  space-y-3'>
                  <div className='flex gap-3'>
                    <CheckCircle className='h-6 w-6 text-orange-500' />
                    <h3 className='text-md font-heading'>{card.title}</h3>
                  </div>
                  <p className='text-sm leading-6 text-gray-500'>
                    {card.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className='flex w-[300px] flex-col justify-center space-y-3'>
                  <div className='flex gap-3'>
                    <div className='flex gap-3'>
                      <CheckCircle className='h-6 w-6 text-orange-500' />
                      <h3 className='text-md font-heading'>{card.title}</h3>
                    </div>
                  </div>
                  <div>
                    <p className='text-sm text-gray-500'>{card.description}</p>
                  </div>
                </div>
                <div className='w-[450px]'>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      className='rounded-lg object-contain'
                      fill
                    />
                  </AspectRatio>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
