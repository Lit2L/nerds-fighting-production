import Logos from '../../public/assets/TigerLogo.png'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href='/' className=''>
      <Image
        src={Logos}
        alt='Tiger Club Kickboxing'
        width={90}
        height={90}
        className='rounded-full border'
      />
    </Link>
  )
}

export default Logo
