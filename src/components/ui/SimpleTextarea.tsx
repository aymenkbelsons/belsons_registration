/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Field, Label, Textarea } from '@headlessui/react'
import classNames from 'classnames'
import { RegisterOptions } from 'react-hook-form'

type TProps = {
  name: string
  title: string
  placeholder: string
  register: any
  registerOptions?: RegisterOptions
  errorMessage?: string
  defaultValue?: any // Optional defaultValue prop
  editable?: boolean // Optional editable prop
  [x: string]: any // Accept any other input props
}

export default function SimpleTextarea({
  name,
  placeholder,
  title,
  register,
  registerOptions,
  errorMessage,
  defaultValue = '', // Default defaultValue is ''
  editable = true, // Default editable is true
  ...rest // Capture any other props
}: TProps) {
  return (
    <Field className="field flex flex-col space-y-1 w-full">
      <Label htmlFor={name} className="text-base  font-medium">
        {title}
      </Label>
      <Textarea
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue} // Apply the defaultValue prop
        readOnly={!editable} // Set readOnly based on the editable prop
        {...register(name, registerOptions)}
        {...rest} // Spread any additional props
        rows={5}
        className={classNames(
          'mt-3 block w-full  border border-grey-scale-600 bg-white px-5 py-3 text-sm text-grey-scale-900',
          'border border-grey-scale-200',
          errorMessage && 'border-red-500'
        )}
      />
      {errorMessage && (
        <p className="text-red-600 text-xs mt-1">{errorMessage}</p>
      )}
    </Field>
  )
}
