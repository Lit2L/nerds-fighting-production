import Image from 'next/image'

function Logo() {
  return (
    <Image
      src='/Group10.png'
      alt='Nerds Kickboxing Club'
      width={800}
      height={800}
      className='rounded-full'
    />
  )
}

export default Logo
