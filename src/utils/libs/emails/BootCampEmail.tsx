import { Preview, Body, Section, Container, Img, Text, Html, Head } from "@react-email/components"

const BootCampEmail = () => {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Preview>أكمل تسجيلك - دورة الأمن السيبراني</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#ffffff',
          width: '100%',
          fontFamily: 'Cairo, Arial, sans-serif',
          direction: 'rtl',
        }}
        dir="rtl"
      >
        {/* Top blue banner */}
        <Section style={{ backgroundColor: '#0968FF', padding: '32px 0' }}>
          <Container style={{ padding: '0 32px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block' }}>
              <Img
                src="https://belsonstechnologies.dz/wp-content/uploads/2025/09/Group-1410103884.png"
                alt="Cyber Security Banner"
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
              direction: 'rtl',
            }}
          >
            {/* Title */}
            <tr>
              <td colSpan={2}>
                <Text
                  style={{
                    fontSize: '28px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    color: 'white',
                    lineHeight: '150%',
                    fontFamily: 'Cairo, Arial, sans-serif',
                    textAlign: 'center',
                  }}
                >
                  أكمل تسجيلك - دورة الأمن السيبراني
                </Text>
              </td>
            </tr>

            {/* Arabic Message */}
            <tr>
              <td colSpan={2}>
                <Text
                  style={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    lineHeight: '1.9',
                    margin: '0 auto',
                    maxWidth: '600px',
                    padding: '0 24px',
                    color: 'white',
                    textAlign: 'right',
                    fontFamily: 'Cairo, Arial, sans-serif',
                  }}
                >
                  مرحبًا،
                  <br />
                  شكرًا لتسجيلك في التدريب الحضوري لمدة 3 أيام في الأمن السيبراني – للمبتدئين والمستوى المتوسط مع <strong>بلال بوغرن</strong>. نحن متحمسون لانضمامك!
                  <br />
                  <br />
                  <strong>التواريخ:</strong> 11، 12 و13 أكتوبر 2025
                  <br />
                  <strong>التوقيت:</strong> 10:00 صباحًا – 3:30 مساءً (مع استراحة غداء)
                  <br />
                  <strong>المكان:</strong> Belsons Technologies Algeria
                  <br />
                  <strong>العنوان:</strong> المحل رقم 945، إقامة الأوركيد، الشراڨة 16014، الجزائر
                  <br />
                  <strong>الرسوم:</strong> 12,000 دج | 9,000 دج للطلبة
                  <br />
                  <br />
                  <strong>تعليمات الدفع لتأكيد مقعدك:</strong>
                  <br />
                  CCP: 0007680585 cle 25
                  <br />
                  Baridi Mob: 00799999000768058525
                  <br />
                  اسم الحساب: Foued Mimouni
                  <br />
                  <br />
                  <strong>تحويل بنكي:</strong> Société Générale Algérie
                  <br />
                  RIB: 021 00023 1130065239 81
                  <br />
                  اسم الحساب: BELSONS TECHNOLOGIES
                  <br />
                  <br />
                  بعد الدفع، أرسل صورة من الإيصال عبر واتساب إلى: <strong>+213770 40 50 56</strong>
                  <br />
                  (الطلبة: أرفقوا بطاقة الطالب للاستفادة من الخصم).
                  <br />
                  بعد التحقق، سيتواصل فريقنا معك لتأكيد تسجيلك.
                  <br />
                  <br />
                  <strong>هام:</strong> يرجى إحضار حاسوبك المحمول للتطبيقات العملية.
                  <br />
                  <br />
                  مع أطيب التحيات،
                  <br />
                  فريق Belsons Technologies
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

export default BootCampEmail
