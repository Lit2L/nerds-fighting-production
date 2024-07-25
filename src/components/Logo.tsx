import Logos from '../../public/logo1.png'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href='/' className=''>
      <Image
        src={Logos}
        alt='Nerds Kickboxing Club'
        width={100}
        height={100}
        className='rounded-full'
      />
    </Link>
  )
}

export default Logo
