import { sendEmail } from '@/utils/libs/mail'
import { appendToSheet } from '@/utils/libs/sheets/googleSheets'
import { render } from '@react-email/render'
import { NextResponse } from 'next/server'
import { ThankYouEmail as ThankYouEmailEN } from '@/utils/libs/emails/ThankYouEmail'
import React from 'react'
import { ThankYouEmailFr } from '@/utils/libs/emails/ThankYouEmailFr'
import { ThankYouEmailAr } from '@/utils/libs/emails/ThankYouEmailAr'

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
    locale,
  } = form

  try {
    let EmailComponent
    let subject = 'Thanks for Registering!'

    switch (locale) {
      case 'fr':
        EmailComponent = ThankYouEmailFr
        subject = 'Merci pour votre inscription !'
        break
      case 'ar':
        EmailComponent = ThankYouEmailAr
        subject = 'شكرًا لتسجيلك!'
        break
      default:
        EmailComponent = ThankYouEmailEN
        subject = 'Thanks for Registering!'
    }

    const html = await render(React.createElement(EmailComponent, { name }))

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
