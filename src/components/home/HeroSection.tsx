'use client'
import React from 'react'
import Container from '../ui/Container'
import { useTranslations } from 'next-intl'

const HeroSection = () => {
  const t = useTranslations('HomePage')
  const list = [
    {
      item_1: t('hero_day_1'),
      item_2: t('hero_day_2')
    },
    {
      item_1: t('hero_meet_1'),
      item_2: t('hero_meet_2')
    },
    {
      item_1: t('hero_free_1'),
      item_2: t('hero_free_2')
    },
  ]
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
          {/*    <br />
          {t('hero_title_3')} */}
        </h1>
        <div className='flex items-center justify-between w-full lg:w-fit lg:gap-12 z-10'>
          {list.map((item, i) => (
            <div key={i} className='flex flex-col items-center justify-center gap-1'>
              <span>
                {item.item_1}
              </span>
              <span>
                {item.item_2}
              </span>
            </div>
          ))}
        </div>
        <button className='px-6 py-3 rounded-lg bg-primary mt-4 z-10 flex flex-col'>
          <span className='text-xs'>
            {t('hero_btn_1')}
          </span>
          <span className='font-extrabold text-lg'>
            {t('hero_btn_2')}
          </span>
        </button>
      </div>
      <div className='w-[800px] h-[800px] lg:w-[1200px] lg:h-[1000px] bg-primary absolute backdrop-blur-2xl blur-3xl -top-[140%] lg:-top-[110%] rounded-full z-0'></div>
    </Container>
  )
}

export default HeroSection