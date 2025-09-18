import { Preview, Body, Section, Container, Img, Text, Html, Head } from "@react-email/components"

const OldParticiopentsBootCampEmail = () => {
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

      <Preview>دعوة خاصة: ارتقِ بمهاراتك في الأمن السيبراني</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#ffffff',
          width: '100%',
          fontFamily: 'Cairo, Arial, sans-serif',
          direction: 'rtl',
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
                  الموضوع: دعوة خاصة: ارتقِ بمهاراتك في الأمن السيبراني
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
                    lineHeight: '1.8',
                    margin: '0 auto',
                    maxWidth: '600px',
                    padding: '0 24px',
                    color: 'white',
                    textAlign: 'right',
                    fontFamily: 'Cairo, Arial, sans-serif',
                  }}
                >
                  مرحباً،
                  <br />
                  شكراً مرة أخرى لانضمامك إلى دورتنا المجانية الأخيرة للتوعية بالأمن السيبراني! لقد أسعدنا حضورك معنا ونأمل أن تكون قد استفدت من المعلومات المطروحة.
                  <br />
                  <br />
                  يسعدنا الآن أن ندعوك للمشاركة في تدريب حضوري لمدة 3 أيام في مجال الأمن السيبراني مع <strong>بلال بوقرن</strong>، والمصمم خصيصاً للمبتدئين وذوي المستوى المتوسط الذين يرغبون في:
                  <br />
                  <br />
                  • اكتساب مهارات عملية وتطبيقية في الأمن السيبراني
                  <br />
                  • تعلم كيفية حماية الأنظمة والبيانات من التهديدات الواقعية
                  <br />
                  • تطوير معارفهم خطوة بخطوة حتى من دون خبرة مسبقة في تكنولوجيا المعلومات
                  <br />
                  • الحصول على شهادة مشاركة عند إتمام الدورة
                  <br />
                  <br />
                  <strong>التواريخ:</strong> 11، 12 و13 أكتوبر 2025
                  <br />
                  <strong>المكان:</strong> مقر بيلسونز تيكنولوجيز – الشراڨة، الجزائر
                  <br />
                  <br />
                  يتضمن هذا البرنامج ورشات عملية، توجيهًا ودعمًا فرديًا لمساعدتك على الانتقال من مرحلة الوعي النظري إلى التطبيق العملي في مجال الأمن السيبراني.
                  <br />
                  المقاعد محدودة، لذلك ندعوك لتأكيد تسجيلك في أقرب وقت ممكن.
                  <br />
                  <br />
                  <a
                    href="(رابط صفحة التسجيل)"
                    style={{ color: '#4EA8F8', fontWeight: '600' }}
                  >
                    سجّل الآن
                  </a>
                  <br />
                  <br />
                  نتطلع لرؤيتك تواصل رحلة تعلمك معنا.
                  <br />
                  <br />
                  مع أطيب التحيات،
                  <br />
                  فريق بيلسونز تيكنولوجيز
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



export default OldParticiopentsBootCampEmail