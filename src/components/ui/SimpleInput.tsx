import { Field, Input, Label } from '@headlessui/react'
import classNames from 'classnames'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'

type TProps = {
  name: string
  title: string
  placeholder: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  errorMessage?: string
  registerOptions?: Record<string, unknown>
}

const SimpleInput: React.FC<TProps> = ({
  name,
  placeholder,
  title,
  register,
  errorMessage,
  registerOptions,
}) => {
  return (
    <Field className="w-full flex flex-col items-start gap-2">
      <Label htmlFor={name} className="text-base  font-medium">
        {title}
      </Label>
      <Input
        id={name}
        placeholder={placeholder}
        {...register(name, registerOptions)}
        className={classNames(
          ' flex items-center p-4  border border-grey-scale-600 w-full rounded-xl',
          'border border-grey-scale-200',
          'text-sm lg:text-base placeholder:text-grey-scale-800',
          errorMessage && '!border-red-500'
        )}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
      )}
    </Field>
  )
}

export default SimpleInput
