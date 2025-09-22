'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Container from '../ui/Container'
import Plus from '@/assets/icons/Plus'
import { useLocale, useTranslations } from 'next-intl'


const FaqSection = () => {
  const t = useTranslations('HomePage')

  const locale = useLocale()
  const isRTL = locale === 'ar'

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqList = t.raw('faq_list') as { qst: string; answ: string }[]

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <Container dir={isRTL ? "rtl" : "ltr"}>
      <div className='flex flex-col items-center gap-16 w-full'>
        <div className='flex flex-col items-center gap-7 w-full lg:w-2/3'>
          <h4 className='text-3xl lg:text-5xl font-semibold'>{t('faq_title')}</h4>
          <p className='text-lg lg:text-2xl text-grey'>{t('faq_desc')}</p>
        </div>

        <div className='w-full lg:w-2/3 flex flex-col gap-6'>
          {faqList.map((item, i) => (
            <div key={i} className='w-full'>
              <button
                onClick={() => toggleIndex(i)}
                className='text-lg lg:text-2xl text-white text-start flex items-center justify-between w-full py-9 border-b border-b-white/20'
              >
                <span>{item.qst}</span>
                <Plus />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-sm text-white/80"
                  >
                    <div className='py-6 text-base lg:text-xl text-start'>{item.answ}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default FaqSection
