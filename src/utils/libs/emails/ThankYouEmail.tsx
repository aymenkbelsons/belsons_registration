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

export const ThankYouEmail = ({ name }: { name: string }) => {
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

      <Preview>Thank you for registering!</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#ffffff',
          width: '100%',
          fontFamily: 'Cairo, Arial, sans-serif',
        }}
      >
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}>
              <Img
                src="https://i.ibb.co/Z12stRkY/Group-1410103797.png"
                alt="Thank You Banner"
                width="200"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </Container>
        </Section>
        {/* Course announcement section */}
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
                  src="https://i.ibb.co/TMdBGbDG/Frame-2147225621.png"
                  alt="Cyber Security Course"
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
                    fontFamily: 'Cairo, Arial, sans-serif'
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
                    fontFamily: 'Cairo, Arial, sans-serif'

                  }}
                >
                  Free Online Course Introduction to Cyber Security
                </Text>

                <Text
                  style={{
                    fontSize: '14px',
                    marginBottom: '24px',
                    color: 'white',
                    fontFamily: 'Cairo, Arial, sans-serif'

                  }}
                >
                  July 25, 2025 &nbsp;|&nbsp; 3:00 pm (algeria time) &nbsp;|&nbsp; online
                </Text>
              </td>
            </tr>

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
                  Thank You for Registering!
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
                    fontFamily: 'Cairo, Arial, sans-serif'

                  }}
                >
                  Dear {name},
                  <br />
                  Thank you for registering for our free training session. We&apos;re glad to have you with us!
                  <br />
                  You will receive an email with the Google Meet link closer to the session date.
                  <br />
                  If you have any questions, feel free to contact us.
                  <br />
                  <br />
                  Best regards,
                </Text>
              </td>
            </tr>
          </table>
        </Section>

        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}>
            </div>
          </Container>
        </Section>
      </Body>
    </Html>
  )
}
