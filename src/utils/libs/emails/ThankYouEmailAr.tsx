import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Img,
} from '@react-email/components'

export const ThankYouEmailAr = ({ name }: { name: string }) => {
  return (
    <Html dir="rtl" lang="ar">
      <Head />
      <Preview>شكراً لتسجيلك!</Preview>

      <Body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff', width: '100%' }}>
        {/* Banner */}
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}>
              <Img
                src="https://i.ibb.co/Z12stRkY/Group-1410103797.png"
                alt="لافتة شكر"
                width="200"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </Container>
        </Section>

        {/* Main Content */}
        <Section
          style={{
            backgroundColor: '#060F20',
            padding: '32px',
            width: '100%',
            direction: 'rtl',
          }}
        >
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            role="presentation"
            style={{
              width: '100%',
              maxWidth: '700px',
              margin: '0 auto',
              direction: 'rtl',
            }}
          >
            <tr>
              {/* Left: Image (still on the left, visually flipped by RTL) */}
              <td style={{ width: '50%', padding: '0 16px' }}>
                <Img
                  src="https://i.ibb.co/TMdBGbDG/Frame-2147225621.png"
                  alt="دورة الأمن السيبراني"
                  width="100%"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </td>

              {/* Right: Text Group */}
              <td style={{ width: '50%', padding: '0 16px' }}>
                <Text
                  style={{
                    fontSize: '16px',
                    marginBottom: '10px',
                    border: '1px solid white',
                    borderRadius: '10px',
                    padding: '12px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'right',
                  }}
                >
                  احمِ حياتك الرقمية من خلال جلسة واحدة فقط
                </Text>

                <Text
                  style={{
                    fontSize: '36px',
                    lineHeight: '150%',
                    marginBottom: '16px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'right',
                  }}
                >
                  دورة مجانية أونلاين<br />مقدمة في الأمن السيبراني
                </Text>

                <Text
                  style={{
                    fontSize: '14px',
                    marginBottom: '24px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'right',
                  }}
                >
                  25 جويلية 2025 &nbsp;|&nbsp; 3:00 مساءً (بتوقيت الجزائر) &nbsp;|&nbsp; أونلاين
                </Text>
              </td>
            </tr>

            {/* Title */}
            <tr>
              <td colSpan={2}>
                <Text
                  style={{
                    fontSize: '40px',
                    fontWeight: '500',
                    marginTop: '32px',
                    marginBottom: '24px',
                    color: 'white',
                    lineHeight: '150%',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  شكراً لتسجيلك!
                </Text>
              </td>
            </tr>

            {/* Paragraph */}
            <tr>
              <td colSpan={2}>
                <Text
                  style={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '1.6',
                    margin: '0 auto',
                    maxWidth: '600px',
                    padding: '0 24px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'right',
                  }}
                >
                  {name ? `عزيزي ${name}،` : `مرحباً،`}
                  <br />
                  شكرًا لتسجيلك في جلستنا التدريبية المجانية. نحن سعداء بانضمامك إلينا!
                  <br />
                  ستتلقى رسالة إلكترونية تحتوي على رابط Google Meet قبل موعد الجلسة.
                  <br />
                  إذا كانت لديك أي استفسارات، لا تتردد في التواصل معنا.
                  <br />
                  <br />
                  مع أطيب التحيات،
                </Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Footer */}
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}></div>
          </Container>
        </Section>
      </Body>
    </Html>
  )
}
