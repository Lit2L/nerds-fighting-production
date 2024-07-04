import { AspectRatio } from '../components/ui/aspect-ratio'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const featureCards = [
  {
    id: 0,
    title: 'Private Coaching',
    description:
      'Learning technique through private lessons is an excellent approach suitable for beginners to experienced swimmers as it allows for personalized instruction based on your ability level and swimming objectives.',
    info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/8.jpg',
    icon: '🥷🥋🏅🏆🏊🏄‍♀️'
  },
  {
    id: 1,
    title: 'Video Analysis',
    description:
      'Visually analyze your swimming technique and fast-track the learning process. Pinpoint areas for improvement and get a deeper understanding of swimming mechanics to help make rapid progress toward your goals.',
    info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/10.jpg',
    icon: '💪'
  },
  {
    id: 2,
    title: 'Flow State Practice',
    description:
      'Join a laid-back community of zen-minded martial artists and immerse yourself in the state of flow with daily group training, weekly stroke clinics, and monthly open water swims - all ages and levels welcome.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/6.jpg',

    icon: '💪'
  },
  {
    id: 3,
    title: 'Hands-On Lessons',
    description: 'Your future self will thank you more than you can imagine.',
    info: '30 - ALL AGES. BEGINNERS.',
    image: '/assets/seniorkickboxer.png',
    icon: '🎋'
  },
  {
    id: 4,
    title: 'Outdoor Training',
    description:
      'Train as the ancient warriors have done for centuries. Our outdoor training sessions are designed to help you connect with nature, improve your fitness, and build mental toughness.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/nobullyzone.png',
    icon: '🚫'
  }
]

export const About = () => {
  return (
    <section
      id='about'
      className='bg-[radial-gradient (circle_500px_at_50%_200px,#181818,transparent)] container mx-auto py-20 '
    >
      <div className='mx-auto my-12 flex max-w-[58rem] flex-col items-center justify-center space-y-16 text-center'>
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
            className='flex flex-col items-center justify-center gap-12 px-9'
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
                    {card.info}
                  </p>
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
                      {card.info}
                    </p>
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
