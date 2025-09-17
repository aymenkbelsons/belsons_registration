import { SvgType } from '@/utils/types/SvgType'
import React from 'react'

const CheckBox = ({ ...props }: SvgType) => {
  return (
    <svg {...props} width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.763 11.5742L16.8677 31.4694L7.82446 22.4262" stroke="#0080FF" strokeWidth="3.61731" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default CheckBox