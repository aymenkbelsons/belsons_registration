import { sendEmail } from '@/utils/libs/mail'
import { appendToSheet } from '@/utils/libs/sheets/googleSheets'
import { render } from '@react-email/render'
import { NextResponse } from 'next/server'
import React from 'react'
import BootCampEmail from '@/utils/libs/emails/BootCampEmail'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const form = await req.json()
  const {
    name,
    email,
    day,
    month,
    year,
    city,
    country,
    occupation,
    message_1,
    message_2,
  } = form

  try {
    const subject = 'Thanks for Registering!'
    const html = await render(React.createElement(BootCampEmail, { name }))

    await sendEmail(email, subject, html)

    await appendToSheet([
      name,
      email,
      `${day}/${month}/${year}`,
      city,
      country,
      occupation || '',
      message_1,
      message_2,
      new Date().toISOString(),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in send-email route:', error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
