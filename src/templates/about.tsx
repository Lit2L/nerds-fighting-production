import { AspectRatio } from '../components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { CiVideoOn } from 'react-icons/ci'
import { FaYinYang } from 'react-icons/fa'
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
    title: 'Group Training',
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
      className='container relative min-h-full w-full bg-[radial-gradient(circle_350px_at_50%_450px,#a614204d,transparent)] py-24'
    >
      <div className=''>
        <h2 className='my-6 text-center font-heading text-3xl font-bold leading-[1.1] md:text-3xl'>
          What Nerds?
        </h2>
        <div className='relative flex translate-y-24 flex-col items-center justify-center pb-36'>
          <Image
            src='/temple.png'
            alt='temple'
            width={400}
            height={400}
            className='absolute -top-10 z-10 opacity-90'
          />

          <div className='flex -translate-y-24 flex-col items-center justify-center rounded-full py-20'>
            <h3 className='pt-36 text-center font-kronaOne text-lg'>
              The Dojo.
              <FaYinYang className='-z-10 mx-auto size-12' />
            </h3>
            <div className='my-12 h-full max-w-[700px] rounded-3xl border-x border-y  border-gray-500/20 bg-zinc-900/70 drop-shadow'>
              <div className='flex flex-col items-center justify-center p-3 text-left'>
                <p className='md:text-md p-3 font-mono text-xs font-semibold leading-6 tracking-tighter text-white dark:text-white sm:text-sm md:leading-9'>
                  <span className='font-heading text-lg text-emerald-500'>Nerds Fighting</span> was
                  started by a passionate group of nerds who believed it was time to learn how to
                  defend themselves. All members had one request, to be able to continue their lives
                  during and after training without sustaining brain injury. With health and
                  longevity as the prime focus we&apos;ve developed a training style that emphasizes
                  heavily towards defensive skills, proper technique and controlled sparring,
                  minimizing unnecessary damage to the body and brain. Our mission is to share this
                  approach with others, allowing everyone to train like a fighter while protecting
                  their health. Join us to experience the benefits of this unique, safe, and
                  effective training style.
                  <br />
                </p>
              </div>
            </div>
            <Separator className='my-3 bg-white' />
            <div className=' my-6 h-full max-w-[700px] rounded-3xl border-x border-y  border-gray-500/20 bg-zinc-900/70 bg-[radial-gradient(circle_250px_at_50%_160px,#f2f2f260,transparent)] drop-shadow'>
              <div className='flex flex-col items-center justify-center p-3 text-left '>
                <div className='p-6 font-mono text-xl font-bold'>
                  <span className='font-heading text-lg text-emerald-500'>Nerds Fighting</span>
                  <ul className='flex flex-col space-y-6 p-6 font-mono text-xs font-semibold tracking-tighter text-white dark:text-white md:text-sm'>
                    <li className=''>
                      • Wants you to have the ability to protect yourself and your loved ones.
                    </li>
                    <li className=''>
                      • Wants you to be confident and comfortable in your own skin no matter where
                      are.
                    </li>
                    <li className=''>
                      • Wants you to live long-lasting, sharp, strong, and flexible body.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
                        className='rounded-lg object-cover'
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
                        height={350}
                        width={350}
                      />
                    </AspectRatio>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
