import { NextResponse } from 'next/server'
import { render } from '@react-email/render'
import React from 'react'

import { sendEmail } from '@/utils/libs/mail'
import { GoogleMeetEmail } from '@/utils/libs/emails/GoogleMeetEmail'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  try {
    const { emails } = await req.json()

    if (!Array.isArray(emails)) {
      return NextResponse.json(
        { error: 'Invalid or missing emails array' },
        { status: 400 }
      )
    }

    const failed: string[] = []

    for (const email of emails) {
      const html = await render(
        React.createElement(GoogleMeetEmail, { name: '' })
      )

      try {
        await sendEmail(email, 'Your Meeting Link', html)
        console.log(`✅ Email sent to ${email}`)
      } catch (err) {
        console.error(`❌ Failed to send to ${email}`, err)
        failed.push(email)
      }

      // Wait 1 second before sending the next email
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    console.log('❌ Failed Emails:', failed)

    return NextResponse.json({
      success: true,
      message: 'Emails processed',
      failedCount: failed.length,
      failedEmails: failed,
    })
  } catch (err) {
    console.error('❌ Server error:', err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
