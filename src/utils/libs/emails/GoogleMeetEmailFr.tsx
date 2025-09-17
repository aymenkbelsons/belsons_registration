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

export const GoogleMeetEmailFr = ({ name }: { name: string }) => {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Lien Google Meet pour la session de formation</Preview>

      <Body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff', width: '100%' }}>
        {/* Banner Section */}
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}>
              <Img
                src="https://i.ibb.co/Z12stRkY/Group-1410103797.png"
                alt="Bannière de remerciement"
                width="200"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </div>
          </Container>
        </Section>

        {/* Content Section */}
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
              {/* Left Image */}
              <td style={{ width: '50%', padding: '0 16px' }}>
                <Img
                  src="https://i.ibb.co/TMdBGbDG/Frame-2147225621.png"
                  alt="Formation Cybersécurité"
                  width="100%"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </td>

              {/* Right Text */}
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
                  }}
                >
                  Protégez votre vie numérique en une seule session
                </Text>

                <Text
                  style={{
                    fontSize: '36px',
                    lineHeight: '150%',
                    marginBottom: '16px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                  }}
                >
                  Cours en Ligne Gratuit <br /> Introduction à la Cybersécurité
                </Text>

                <Text
                  style={{
                    fontSize: '14px',
                    marginBottom: '24px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                  }}
                >
                  25 juillet 2025 &nbsp;|&nbsp; 15h00 (heure d’Algérie) &nbsp;|&nbsp; En ligne
                </Text>
              </td>
            </tr>

            {/* Greeting and Message */}
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
                  {name ? `Cher ${name},` : `Bonjour,`}
                </Text>
              </td>
            </tr>

            <tr>
              <td colSpan={2}>
                <Text
                  style={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '1.8',
                    margin: '0 auto',
                    maxWidth: '600px',
                    padding: '0 24px',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    textAlign: 'left',
                  }}
                >
                  Nous sommes ravis de vous accueillir à notre session de formation gratuite !
                  <br />
                  <br />
                  <strong>Lien Google Meet :</strong>{' '}
                  <a
                    href="https://meet.google.com/nvj-zkiz-yuj"
                    style={{ color: '#4EA8F8' }}
                  >
                    https://meet.google.com/nvj-zkiz-yuj
                  </a>
                  <br />
                  <br />
                  Merci de vous connecter quelques minutes en avance pour assurer un bon démarrage.
                  <br />
                  {` Si vous avez des questions, n'hésitez pas à nous contacter.`}
                  <br />
                  <br />
                  Au plaisir de vous retrouver bientôt !
                  <br />
                  <br />
                  Cordialement,
                </Text>
              </td>
            </tr>
          </table>
        </Section>

        {/* Footer Section */}
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}></div>
          </Container>
        </Section>
      </Body>
    </Html>
  )
}
