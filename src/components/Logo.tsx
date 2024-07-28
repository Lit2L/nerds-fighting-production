// import Logos from '../../public/NFlogo.png'
import Logos from '../../public/Group10.png'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Image
      src={Logos}
      alt='Nerds Kickboxing Club'
      width={800}
      height={800}
      className='rounded-full'
    />
  )
}

export default Logo
