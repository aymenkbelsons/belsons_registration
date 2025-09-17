/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { TFormInput, TFormOutput, ZForm } from '@/utils/types/form.type'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import SimpleInput from './ui/SimpleInput'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useLocale, useTranslations } from 'next-intl'

const RegistrationForm = () => {
  const [isFormLoading, setIsFormLoading] = useState(false)
  const t = useTranslations('Form')
  const locale = useLocale()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormInput, any, TFormOutput>({
    resolver: zodResolver(ZForm),
    mode: 'onTouched',
  })

  const mutation = useMutation({
    mutationFn: async (data: TFormOutput) => {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      })

      const result = await res.json()
      if (!res.ok || !result.success) {
        throw new Error(result?.error || 'Submission failed')
      }

      return result
    },
    onMutate: () => {
      toast.loading(t('submitting'), { id: 'reg' })
      setIsFormLoading(true)
    },
    onSuccess: () => {
      toast.success('🎉 ' + t('success'), { id: 'reg' })
      reset()
    },
    onError: (error) => {
      toast.error(`❌ ${error.message}`, { id: 'reg' })
    },
    onSettled: () => {
      setIsFormLoading(false)
    },
  })

  const onSubmit = (data: TFormOutput) => {
    mutation.mutate(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-center w-full lg:w-2/3 gap-4 ${isFormLoading ? 'opacity-50 pointer-events-none' : ''}`}
    >
      <SimpleInput
        name="name"
        placeholder={t('name_placeholder')}
        register={register}
        title={t('name_title')}
        errorMessage={errors.name?.message}
      />

      <SimpleInput
        name="email"
        placeholder={t('email_placeholder')}
        register={register}
        title={t('email_title')}
        errorMessage={errors.email?.message}
      />

      <div className="flex flex-col w-full">
        <label className="w-full">{t('dob_title')}</label>
        <div className="w-full flex items-center justify-between gap-6 lg:gap-12">
          <SimpleInput
            name="day"
            placeholder={t('day_placeholder')}
            register={register}
            title=""
            errorMessage={errors.day?.message}
            registerOptions={{ valueAsNumber: true, min: 1, max: 31 }}
          />
          <SimpleInput
            name="month"
            placeholder={t('month_placeholder')}
            register={register}
            title=""
            errorMessage={errors.month?.message}
            registerOptions={{ valueAsNumber: true, min: 1, max: 12 }}
          />
          <SimpleInput
            name="year"
            placeholder={t('year_placeholder')}
            register={register}
            title=""
            errorMessage={errors.year?.message}
            registerOptions={{ valueAsNumber: true }}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label className="w-full">{t('city_country_title')}</label>
        <div className="w-full flex items-center justify-between gap-6 lg:gap-12">
          <SimpleInput
            name="city"
            placeholder={t('city_placeholder')}
            register={register}
            title=""
            errorMessage={errors.city?.message}
          />
          <SimpleInput
            name="country"
            placeholder={t('country_placeholder')}
            register={register}
            title=""
            errorMessage={errors.country?.message}
          />
        </div>
      </div>

      <SimpleInput
        name="occupation"
        placeholder={t('occupation_placeholder')}
        register={register}
        title={t('occupation_title')}
        errorMessage={errors.occupation?.message}
      />

      <SimpleInput
        name="message_1"
        placeholder={t('message1_placeholder')}
        register={register}
        title={t('message1_title')}
        errorMessage={errors.message_1?.message}
      />

      <SimpleInput
        name="message_2"
        placeholder={t('message2_placeholder')}
        register={register}
        title={t('message2_title')}
        errorMessage={errors.message_2?.message}
      />

      <button
        type="submit"
        disabled={isFormLoading}
        className="py-5 px-7 rounded-2xl bg-primary text-white mt-4 text-2xl lg:text-4xl uppercase hover:opacity-80 duration-200 hover:duration-200 cursor-pointer"
      >
        {isFormLoading ? t('submitting') : t('submit')}
      </button>
    </form>
  )
}

export default RegistrationForm
