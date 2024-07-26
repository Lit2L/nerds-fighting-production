import Logos from '../../public/NFlogo.png'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Image
      src={Logos}
      alt='Nerds Kickboxing Club'
      width={300}
      height={300}
      className='rounded-full'
    />
  )
}

export default Logo
