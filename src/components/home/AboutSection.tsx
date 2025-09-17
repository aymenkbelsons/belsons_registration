'use client'
import React from 'react'
import Container from '../ui/Container'
import image from '@/assets/images/bilel.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import classNames from 'classnames'
import { kanit } from '@/assets/fonts/kanit'

const AboutSection = () => {
  const t = useTranslations('HomePage')

  const days = [
    {
      title: t('days_1_title'),
      desc: t('days_1_desc'),
      list: [
        t('days_1_list_1'),
        t('days_1_list_2'),
        {
          label: t('days_1_list_3'),
          sub: [t('days_1_list_3_sub_1'), t('days_1_list_3_sub_2')],
        },
      ],
    },
    {
      title: t('days_2_title'),
      desc: t('days_2_desc'),
      list: [
        t('days_2_list_1'),
        t('days_2_list_2'),
        {
          label: t('days_2_list_3'),
          sub: [t('days_2_list_3_sub_1'), t('days_2_list_3_sub_2')],
        },
      ],
    },
    {
      title: t('days_3_title'),
      desc: t('days_3_desc'),
      list: [
        t('days_3_list_1'),
        t('days_3_list_2'),
        t('days_3_list_3'),
      ],
    },
  ]

  return (
    <Container innerClassName='flex justify-center'>
      <div className='w-full lg:w-2/3 flex flex-col gap-4 lg:gap-7 items-center'>
        <h1 className={classNames('text-3xl lg:text-5xl font-medium', kanit.className)}>
          {t('about_title')}
        </h1>

        {/* Days Cards */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
          {days.map((day, i) => (
            <div
              key={i}
              className={classNames(
                'w-full border border-primary rounded-lg p-4 flex flex-col gap-3',
                i === 2 && 'md:col-span-2 md:w-1/2 mx-auto' // ✅ Center Day 3
              )}
            >
              <h3 className={classNames('text-2xl lg:text-4xl font-medium ', kanit.className)}>{day.title}</h3>
              <span className='text-base  lg:text-lg'>{day.desc}</span>
              <ul className='list-decimal list-inside space-y-1'>
                {day.list.map((item, idx) => {
                  if (typeof item === 'string') {
                    return <li key={idx} className='text-xs lg:text-base font-semibold'>{item}</li>
                  }
                  return (
                    <li key={idx} className='text-xs lg:text-base font-semibold'>
                      {item.label}
                      <ul className='list-disc list-inside ml-6 space-y-1'>
                        {item.sub.map((subItem, subIdx) => (
                          <li key={subIdx} className='text-xs lg:text-base'>{subItem}</li>
                        ))}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className='text-base lg:text-xl mt-10'>
          {t('about_desc')}
        </div>

        {/* Mentor Section */}
        <div className='mt-8 w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-10 justify-between'>
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
