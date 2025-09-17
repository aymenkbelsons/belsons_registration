import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // notifications@belsons.com
    pass: process.env.EMAIL_PASS, // Z77BLnWZ or App Password
  },
})

export async function sendEmail(to: string, subject: string, html: string) {
  const info = await transporter.sendMail({
    from: `"Belsons Technologies" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  })

  console.log('Message sent: %s', info.messageId)
}
