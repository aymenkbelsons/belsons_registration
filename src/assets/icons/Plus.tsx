import { SvgType } from '@/utils/types/SvgType'
import React from 'react'

const Plus = ({ ...props }: SvgType) => {
  return (
    <svg {...props} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2556_1985)">
        <rect x="0.576294" y="12.7275" width="28.9385" height="3.61731" rx="1.80866" fill="#0968FF" />
        <rect x="13.2369" y="0.0673828" width="3.61731" height="28.9385" rx="1.80866" fill="#0968FF" />
      </g>
      <defs>
        <clipPath id="clip0_2556_1985">
          <rect width="28.9385" height="28.9385" fill="white" transform="translate(0.576294 0.0673828)" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default Plus