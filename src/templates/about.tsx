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
      'Personalized instruction tailored to your ability and goals. Ideal for beginners and experienced kickboxers alike, private lessons help you master technique at your own pace.',
    info: '60 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/3.jpg',
    icon: <GiWhistle className='size-6 text-blue-800' />,
    href: 'https://calendly.com/nerdsfighting/private-coaching'
  },

  {
    id: 1,
    title: 'Video Analysis',
    description:
      'Accelerate your progress with visual feedback. Our instructors guide you through sessions to pinpoint areas for improvement and deepen your understanding of fight mechanics.',
    info: '30 OR 60 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/10.jpg',
    icon: <CiVideoOn className='size-6 text-red-800' />,
    href: 'https://calendly.com/nerdsfighting/video-analysis-session-1'
  },
  {
    id: 2,
    title: 'Nerds Training',
    description:
      'Join a supportive community of martial artists. Enjoy daily group sessions that include bodyweight exercises, drills, mitts, Thai pads, heavy bag work, and more, all designed to help you reach your peak performance.',
    info: '60 - 90 MINS - ALL AGES. ALL LEVELS.',
    image: '/assets/6.jpg',
    icon: <GiYinYang className='size-6 text-sky-600' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 3,
    title: 'Cardio Kickboxing Sessions',
    description:
      'Experience a high-energy, dynamic hour of kickboxing. Perfect for beginners, these sessions boost your fitness and leave you feeling empowered.',
    info: '30 - ALL AGES. BEGINNERS.',
    image: '/assets/seniorkickboxer.png',
    icon: <GiTeacher className='size-6 text-red-500' />,
    href: 'https://calendly.com/nerdsfighting/free-trial-kickboxing-class'
  },
  {
    id: 4,
    title: 'Outdoor Training',
    description:
      'Train like ancient warriors with our outdoor sessions. Connect with nature, enhance your fitness, and build mental toughness in a challenging and invigorating environment.',
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
      <div className='mx-auto my-12 flex max-w-[58rem] flex-col items-center justify-center space-y-9 pb-36 text-center'>
        <h2 className='text-left font-heading text-3xl font-bold leading-[1.1] md:text-3xl'>
          Train with Purpose
        </h2>
        <h3 className='font-kronaOne'>The Dojo.</h3>
        <p className='md:text-md text-md font-krona max-w-[85%]  pb-6 text-left leading-normal dark:text-white sm:text-center md:leading-8'>
          At Nerds Fighting we&apos;ve crafted a friendly environment that fosters respect,
          learning, growth and teamwork while guiding you through training that hones your skills
          and enhances your fighting abilities. We&apos;ve developed a wide range of dynamic
          workouts and drills design to improve coordination, speed and power.
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
