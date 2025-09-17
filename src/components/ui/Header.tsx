import Image, { StaticImageData } from 'next/image'
import React from 'react'


type TProps = {
  title: string
  image: StaticImageData
}

const Header = ({ image, title }: TProps) => {
  return (
    <section className="relative h-[300px] lg:h-[500px] overflow-hidden py-12 lg:py-20">
      {/* Background image */}
      <Image
        src={image}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to to-black/10 z-10" />
      <div className="absolute inset-0 bg-primary-500/10 -10" />

      <div className="relative z-20 container mx-auto px-6 lg:px-0 h-full flex items-center">
        <div className='flex w-full  items-center justify-center mt-12 lg:mt-20'>
          <h1 className="text-white text-3xl lg:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default Header