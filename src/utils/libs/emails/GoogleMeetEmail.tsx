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

export const GoogleMeetEmail = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Preview>Google Meet Link for Cybersecurity Training</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#ffffff',
          width: '100%',
          fontFamily: 'Cairo, Arial, sans-serif',
        }}
      >
        {/* Top blue banner */}
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}>
              <Img
                src="https://i.ibb.co/23CS7wLv/Group-1410103797.png"
                alt="Thank You Banner"
                width="200"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </Container>
        </Section>

        {/* Course details section */}
        <Section
          style={{
            backgroundColor: '#060F20',
            padding: '32px',
            width: '100%',
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
            }}
          >
            <tr>
              {/* Left: Image */}
              <td style={{ width: '50%', padding: '0 16px' }}>
                <Img
                  src="https://i.ibb.co/FLVRWSJk/Frame-2147225621.png"
                  alt="Cyber Security Course"
                  width="100%"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </td>

              {/* Right: Course text */}
              <td style={{ width: '50%', padding: '0 16px' }}>
                <Text
                  style={{
                    fontSize: '16px',
                    marginBottom: '10px',
                    border: '1px solid white',
                    borderRadius: '10px',
                    padding: '12px',
                    color: 'white',
                    fontFamily: 'Cairo, Arial, sans-serif',
                  }}
                >
                  Protect Your Digital Life in Just One Session
                </Text>

                <Text
                  style={{
                    fontSize: '36px',
                    lineHeight: '150%',
                    marginBottom: '16px',
                    color: 'white',
                    fontFamily: 'Cairo, Arial, sans-serif',
                  }}
                >
                  Free Online Course Introduction to Cyber Security
                </Text>

                <Text
                  style={{
                    fontSize: '14px',
                    marginBottom: '24px',
                    color: 'white',
                    fontFamily: 'Cairo, Arial, sans-serif',
                  }}
                >
                  July 25, 2025 &nbsp;|&nbsp; 3:00 pm (Algeria time) &nbsp;|&nbsp; Online
                </Text>
              </td>
            </tr>

            {/* New custom message section */}
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
                    fontFamily: 'Cairo, Arial, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  Hello
                </Text>
              </td>
            </tr>

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
                    textAlign: 'left',
                    fontFamily: 'Cairo, Arial, sans-serif',
                  }}
                >
                  We’re excited to have you join our free training session!
                  <br />
                  <br />
                  <strong>Google Meet Link:</strong>{' '}
                  <a
                    href="https://meet.google.com/nvj-zkiz-yuj"
                    style={{ color: '#4EA8F8' }}
                  >
                    https://meet.google.com/nvj-zkiz-yuj
                  </a>
                  <br />
                  <br />
                  Please join a few minutes early to ensure a smooth start. If you have any
                  questions, don’t hesitate to reach out.
                  <br />
                  <br />
                  Looking forward to seeing you!
                  <br />
                  <br />
                  Best regards,
                </Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Bottom blue banner */}
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}></div>
          </Container>
        </Section>
      </Body>
    </Html>
  )
}
