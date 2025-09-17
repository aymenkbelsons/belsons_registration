'use client'
import React from 'react'
import Container from '../ui/Container'
import image from '@/assets/images/bilel.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AboutSection = () => {
  const t = useTranslations('HomePage')
  const list = t.raw('about_list') as string[]
  return (
    <Container innerClassName='flex justify-center'>
      <div className='w-full lg:w-2/3 flex flex-col gap-4 lg:gap-7 items-start'>
        <h1 className='text-3xl lg:text-5xl'>
          {t('about_title')}
        </h1>
        <p className='text-lg lg:text-2xl'>
          {t('about_desc_1')}
          <br />
          {t('about_desc_2')}
        </p>
        <ul className='list-disc pl-4 flex flex-col gap-2 lg:gap-4'>
          {list?.map((item, i) => (
            <li key={i} className='font-normal text-sm lg:text-lg' >{item}</li>
          ))}
        </ul>
        <div className='mt-4 w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-10 justify-between'>
          <div className='relative overflow-clip lg:w-1/2 rounded-4xl'>
            <Image alt='bilel' src={image} className='relative z-10 scale-105 w-full' />
            <div className='absolute bottom-1 rounded-4xl bg-primary w-full h-2/3 z-0'></div>
          </div>
          <div className='w-full flex flex-col items-start gap-4 lg:w-1/2 '>
            <h3 className='font-semibold text-3xl lg:text-6xl'> {t('about_mentor')}</h3>
            <span className='font-light text-2xl lg:text-5xl'> {t('about_mentor_name')}</span>
            <p className='text-base lg:text-2xl font-normal text-grey'>
              {t('about_mentor_desc')}
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutSection