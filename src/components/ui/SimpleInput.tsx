'use client'

import { Input, Label, Field } from '@headlessui/react'
import classNames from 'classnames'
import { Path, UseFormRegister } from 'react-hook-form'
import { TFormInput } from '@/utils/types/form.type'

interface Props {
  name: Path<TFormInput>
  title: string
  placeholder?: string
  register: UseFormRegister<TFormInput>
  registerOptions?: Record<string, unknown>
  errorMessage?: string
  isRTL?: boolean
}

export default function SimpleInput({
  name,
  title,
  placeholder,
  register,
  errorMessage,
  isRTL,
}: Props) {
  return (
    <Field
      className={classNames(
        'w-full flex flex-col gap-2',
        isRTL ? 'items-end' : 'items-start'
      )}
    >
      <Label
        htmlFor={name}
        className={classNames(
          'text-base font-medium',
          isRTL ? 'text-right w-full' : 'text-left w-full'
        )}
      >
        {title}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className={classNames(
          'flex items-center p-4 border border-grey-scale-200 w-full rounded-xl',
          'text-sm lg:text-base placeholder:text-grey-scale-800',
          errorMessage && '!border-red-500',
          isRTL && 'text-right'
        )}
      />
      {errorMessage && (
        <p
          className={classNames(
            'text-red-500 text-xs mt-1',
            isRTL ? 'text-right' : 'text-left'
          )}
        >
          {errorMessage}
        </p>
      )}
    </Field>
  )
}
