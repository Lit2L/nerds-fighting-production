import { Fuel, Share, Shield } from 'lucide-react'
import { GiHospitalCross, GiWeight } from 'react-icons/gi'
import { PiParkDuotone } from 'react-icons/pi'

const benefitItems = [
  {
    title: 'Burn Calories',
    description:
      'Burn over 1000 calories per session, transforming your body and improving your overall fitness.',
    icon: <Fuel />
  },
  {
    title: 'Longevity & Health',
    description:
      'Regular kickboxing practice can improve cardiovascular health, boost your immune system, and even increase your longevity.',
    icon: <GiHospitalCross />
  },
  {
    title: 'Learn Self-Defense',
    description:
      'Kickboxing teaches you practical self-defense techniques that can help you stay safe and confident in any situation.',
    icon: <Shield />
  },
  {
    title: 'Relieve Stress',
    description:
      'Kickboxing is an excellent way to release pent-up energy and relieve stress, leaving you feeling refreshed and rejuvenated.',
    icon: <PiParkDuotone />
  },
  {
    title: 'Transform Your Body',
    description:
      'With consistent kickboxing practice, you’ll see dramatic changes in your body, including increased muscle tone, improved posture, and a more confident, powerful physique.',
    icon: <GiWeight />
  },
  {
    title: 'Join Our Community',
    description:
      'Become part of a supportive, like-minded community of individuals who are passionate about personal growth, fitness, and living their best lives.',
    icon: <Share />
  }
]
export default function Benefits() {
  return (
    <section className='w-full bg-background py-12 md:py-24 lg:py-32'>
      <div className='container grid gap-12 px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-6 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground'>
              Benefits
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Unlock Your Full Potential
            </h2>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Discover the transformative power of kickboxing and join our community of like-minded
              individuals dedicated to personal growth and living their best lives.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl divide-y divide-border rounded-lg border md:grid-cols-3 md:divide-x md:divide-y-0'>
          {benefitItems.map((item, index) => (
            <div key={index} className='flex flex-col items-start justify-start p-8 md:p-10'>
              <div className='flex items-center gap-3 py-3'>
                <div className='rounded-full bg-primary p-2 text-primary-foreground'>
                  {item.icon}
                </div>
                <h3 className='text-left text-xl font-bold'>{item.title}</h3>
              </div>
              <p className='text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
