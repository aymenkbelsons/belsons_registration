'use client'
import React from 'react'
import Container from '../ui/Container'
import { useTranslations } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations('HomePage')
  return (
    <Container innerClassName='flex justify-center overflow-clip'>
      <div className='uppercase w-full lg:w-2/3 flex flex-col gap-4 lg:gap-7 items-center'>
        <span className='font-medium text-sm lg:text-lg border border-white rounded-lg p-2.5 lg:p-4 z-10'>
          {t('hero_sub')}
        </span>
        <h1 className=' font-bold text-center text-3xl lg:text-6xl z-10'>
          {t('hero_title_1')}
          <br />
          {t('hero_title_2')}
          <br />
          {t('hero_title_3')}
        </h1>
        <div className='flex items-center justify-between w-full lg:w-fit lg:gap-12 z-10'>
          <span>
            {t('hero_day')}
          </span>
          <span>
            {t('hero_meet')}
          </span>
          <span>
            {t('hero_free')}
          </span>
        </div>
        <button className='px-4 py-3 rounded-lg bg-primary mt-4 z-10'>
          {t('hero_btn')}
        </button>
      </div>
      <div className='w-[800px] h-[800px] lg:w-[1200px] lg:h-[1000px] bg-primary absolute backdrop-blur-2xl blur-3xl -top-[140%] lg:-top-[110%] rounded-full z-0'></div>
    </Container>
  )
}

export default HeroSection