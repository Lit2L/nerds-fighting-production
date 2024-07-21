import { AspectRatio } from '../components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { GiTeacher, GiWhistle, GiYinYang } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

const featureCards = [
  {
    id: 0,
    title: 'Private Coaching',
    description:
      'Learning technique through private lessons is an excellent approach suitable for beginners to experienced kickboxers as it allows for personalized instruction based on your ability level and goals. ',
    info: '60 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/3.jpg',
    icon: <GiWhistle className='size-6 text-blue-800' />,
    href: 'https://calendly.com/nerdsfighting/private-coaching'
  },

  {
    id: 1,
    title: 'Video Analysis',
    description:
      'Visually analyze your technique and fast-track the learning process. Run through a full session lead by your instructor designed to pinpoint areas for improvement and get a deeper understanding of fight mechanics to help make rapid progress toward your goals.',
    info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/10.jpg',
    icon: <CiVideoOn className='size-6 text-red-800' />,
    href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
  },
  {
    id: 2,
    title: 'Nerd Club Training',
    description:
      'Join a laid-back community of zen-minded martial artists and immerse yourself in the state of flow with daily group trainings.  Our sessions include a mix of dynamic body weight exercises, drills, mitts, thai pads, heavy bag work and more.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/6.jpg',
    icon: <GiYinYang className='size-6 text-sky-600' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 3,
    title: 'Cardio Kickboxing Sessions',
    description:
      'A high energy, dynamic hour of kickboxing.  Your future self will thank you more than you can imagine.',
    info: '30 - ALL AGES. BEGINNERS.',
    image: '/assets/seniorkickboxer.png',
    icon: <GiTeacher className='size-6 text-red-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 4,
    title: 'Outdoor Training',
    description:
      'Train as the warriors of the past have done for centuries. Our outdoor training sessions are designed to help you connect with nature, improve your fitness, and build mental toughness. ',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/beach.webp',
    icon: <PiParkDuotone className='size-6 text-green-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  }
]

export const About = () => {
  return (
    <section
      id='about'
      className='bg-[radial-gradient (circle_500px_at_50%_200px,#181818,transparent)] container mx-auto py-20 '
    >
      <div className='mx-auto my-12 flex max-w-[58rem] flex-col items-center justify-center space-y-9 text-center'>
        <h2 className='text-left font-heading text-3xl font-bold leading-[1.1] md:text-3xl'>
          Welcome to Nerds Kickboxing Club
        </h2>
        <h3 className='text-left text-lg font-semibold leading-6 dark:text-white'>
          We observe, we learn, we practice, we test, we implement, we evolve.
        </h3>
        <p className='md:text-md text-md max-w-[85%] py-6 text-left font-heading leading-normal dark:text-white sm:text-center md:leading-8'>
          Nerds Kickboxing Club is dedicated to the Free, Creative Martial Artist. We take what is
          useful and we start the development of our martial artists from there. We understand the
          majority of people who train are not looking to become professional fighters. Our purpose
          isn&apos;t to throw you in the ring and hope for the best. Your health and longevity is
          our main priority. We believe that everyone should have the opportunity to train and
          develop as a fighter and to enjoy the benefits of having a skillset that can potentially
          save your life. Not only do we teach you how to train, we teach you how to train others. A
          skill that you can carry with you for the rest of your life. We offer a safe and fun
          environment for our members to learn, train hard and geek out on all things martial arts.
        </p>
      </div>

      <div className='flex w-full flex-col gap-16 space-y-12'>
        {featureCards.map((card) => (
          <div key={card.id} className='flex flex-col items-center justify-center gap-12 px-9'>
            {card.id % 2 === 0 ? (
              <div className='flex flex-col gap-16 md:flex-row '>
                <div className='md:w-[350px]'>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      className='fill rounded-lg object-cover'
                      height={350}
                      width={350}
                    />
                  </AspectRatio>
                </div>
                <div className='font flex w-[300px] flex-col space-y-3'>
                  <Badge className='mx-auto ml-6 text-xs font-semibold leading-6 '>
                    {card.info}
                  </Badge>
                  <div className='flex w-full translate-x-6 gap-3 pt-3'>
                    <span className=''></span>
                    {card.icon}

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
                  <Badge className='mx-auto ml-6 text-xs font-semibold leading-6'>
                    {card.info}
                  </Badge>

                  <div className='flex gap-3'>
                    <div className='flex translate-x-6 gap-3 pt-3'>
                      {card.icon}
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
