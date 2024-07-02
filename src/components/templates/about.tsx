import { AspectRatio } from '../ui/aspect-ratio'
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
    image: '/assets/10.jpg',
    icon: '💪'
  },
  {
    id: 2,
    title: 'Supportive Community',
    description:
      'Nothing worth having comes easy. Our team and community understands the struggles that come with training. We embrace the suck together.',
    image: '/assets/6.jpg',
    icon: '💪'
  },
  {
    id: 3,
    title: 'Live Long and Healthy',
    description: 'Your future self will thank you more than you can imagine.',
    image: '/assets/seniorkickboxer.png',
    icon: '🎋'
  },
  {
    id: 4,
    title: 'Anti-Bullying',
    description:
      'Bullying is a common  martial artists have dealt with bullying in their past and we are no exception.  We help our students carry themselves with respect, strength and confidence, we call that bully repellant.',
    image: '/assets/nobullyzone.png',
    icon: '🚫'
  }
]

export const About = () => {
  return (
    <section id='features' className='container mx-auto py-20'>
      <div className='mx-auto my-12 flex max-w-[58rem] flex-col items-center space-y-16 text-center'>
        <h2 className='text-left font-heading text-3xl font-bold leading-[1.1] md:text-3xl'>
          Who We Are
        </h2>
        <p className='max-w-[85%] py-6 text-left font-heading text-sm leading-normal dark:text-white sm:text-center md:leading-8'>
          TigerClub has a vision to bring high quality martial arts training to
          people of all fitness and skill levels. We specialize in achieving
          Whether your goals is to improve your health & fitness, practice
          martial arts and self defense, or to gain confidence and mental
          toughness, we all work together as a team to get there.
        </p>
      </div>
      <div className='flex w-full flex-col gap-16 space-y-12'>
        {featureCards.map((card) => (
          <div
            key={card.id}
            className='flex flex-col  items-center justify-center gap-12 px-9'
          >
            {card.id % 2 === 0 ? (
              <div className='flex flex-col gap-16 md:flex-row '>
                <div className='md:w-[350px]'>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      className='rounded-lg object-cover '
                      layout='fill'
                    />
                  </AspectRatio>
                </div>
                <div className='font flex w-[300px] flex-col space-y-3'>
                  <div className='flex w-full translate-x-6 gap-3'>
                    <CheckCircle className='h-6 w-6 text-orange-500' />
                    <h3 className='font-heading text-lg'>{card.title}</h3>
                  </div>
                  <p className='ml-6 text-sm font-light leading-6 dark:text-white'>
                    {card.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className='flex flex-col-reverse gap-16 md:flex-row '>
                <div className='flex w-[300px] flex-col justify-center space-y-3'>
                  <div className='flex gap-3'>
                    <div className='flex translate-x-6  gap-3'>
                      <CheckCircle className='h-6 w-6 text-orange-500' />
                      <h3 className='font-heading text-lg'>{card.title}</h3>
                    </div>
                  </div>
                  <div>
                    <p className='ml-6 text-sm font-light leading-6 text-black dark:text-white'>
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className='md:w-[350px]'>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      className='rounded-lg object-cover '
                      fill
                    />
                  </AspectRatio>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
