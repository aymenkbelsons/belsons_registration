'use client'
import Container from '@/components/ui/Container'
import React from 'react'
import RegistrationForm from '@/components/RegistrationForm'
import FaqSection from '@/components/home/FaqSection'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import { useTranslations } from 'next-intl'
import classNames from 'classnames'
import { kanit } from '@/assets/fonts/kanit'

const Page = () => {
  const t = useTranslations('HomePage')

  const list = t.raw('building_list') as string[]

  const list2 = t.raw('who_list') as string[]


  return (
    <>
      <HeroSection />
      <AboutSection />
      <Container className='bg-gradient-to-r from-[#012866] to-primary' innerClassName='flex justify-center'>
        <div className='w-full lg:w-2/3 flex flex-col gap-4 lg:gap-7 items-start'>
          <h1 className='text-3xl lg:text-5xl'>
            {t('who_title')}
          </h1>
          <p className='text-lg lg:text-2xl'>
            {t('who_sub')}
          </p>
          <ul className='list-disc pl-4 flex flex-col gap-2 lg:gap-4'>
            {list2?.map((item, i) => (
              <li key={i} className='font-normal text-sm lg:text-lg' >{item}</li>
            ))}
          </ul>
          <p className='text-lg lg:text-2xl'>
            {t('who_desc')}
          </p>
        </div>
      </Container>
      <Container>
        <div className='w-full flex flex-col items-center gap-8'>
          <h1 className={classNames('text-3xl lg:text-5xl ', kanit.className)}>
            <span className='font-semibold'>
              {t('building_title_1')}
            </span>
            <br />
            {t('building_title_2')}
            <br />
            {t('building_title_3')}
          </h1>
          <ul className='flex flex-col gap-2.5'>
            {list.map((item, i) => (
              <li key={i} className='flex items-center gap-3 text-grey text-lg lg:text-2xl ' >
                <span>-</span>
                <span>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container>
        <div className='flex flex-col items-center gap-6 lg:gap-11 '>
          <div className='flex flex-col items-start gap-4 w-full  lg:w-2/3'>
            <h3 className='font-semibold text-6xl'>
              {t('form_title')}
            </h3>
            <p className='font-normal text-2xl '>
              {t('form_desc')}
            </p>
          </div>
          <RegistrationForm />
        </div>
      </Container>
      <FaqSection />
      <Container>
        <div></div>
      </Container>
    </>
  )
}

export default Page