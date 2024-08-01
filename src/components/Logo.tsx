import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/Group10.png'
      alt='Nerds Kickboxing Club'
      width={400}
      height={400}
      className='rounded-full'
    />
  )
}

export default Logo
