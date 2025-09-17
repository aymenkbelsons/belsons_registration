import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

const key = `
-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRNGCgh3qpRwkg
JNkkyE7NJ+pg/vNIiK5OSuGX5yK2W/lW0Ou2UaNmhstBTfPNLWbhFqUZ7g7NUA5O
AtHYrkYj5IrjgY6krws8fD26erSPp7C5EoJ9/69alourWOxu+KDfJADinsEFxYgc
5+5y+5cfaW0WY6OP2eg09841E2DQc42xHof/n0AGwDSEUhtc8783s4K+iT/ro8oU
mtMdYBZGZ/dzRb7IQLCBKMR1efGznMaDwEiwdNgIRVHl3Cilya2paCzWiR0beqH0
x48N3Di2KcfJ/7wsWnudLWt2zhKx2v008HzsGvFfQg5yPX/I5tMfokk70W7KGHl3
TtXqdA7JAgMBAAECggEAF80gjzL1YsvuVFtiNGabsd3wMv/emD/WAO9RB5IS53IY
Wzxit41F4goaQYBHvsNYbenAd+5B0zG1UZfNiHGaEPGqrDlBttJ5cfS6pdGEYxxT
eq2J7iGIXEM+JGJLZ/wJJXSjAHrKVXNEn0ad4N68h0+HIIx5KoptT5VqlFbzj/4u
K7+2j1XbIfZVroZi9d+0cu0BEUqatUC5d5/lGq4DfSbIQA269fnwqO4QS3RBLL5+
nksZawNKTaP9GOolcLf8g5CYED4uAbDgwYGbCIApiu/7FD/knEPOJTVdQJ1IcOrd
KIODVCspT5xZ2hbMgJaJsgfdyS3WcFtlujag4IUEFwKBgQD0oe34BCAiB2z/Z1CN
0UJVOsBXVXLU68Gta+UlqJ7H28O1UF6uVZttxxodJnlVbjKAFXjn1e8dSS6VLIoJ
wSW3snDsa3FEVW0SguedrBdZgNsMWkdRNHGGZDrzoKGj2MIF30BnxBzTz6lQ+yNk
uLhHdxKFK3FXzznc1pXOffdS0wKBgQDa7QIqplEZag8hMWXq20YHce1rOiz7LEMj
UzMqizA19ZljqF1/tiTUZKqo1fqkscjaU3ZUGyqIgzBZESxRddXy5sj7b3w7FneX
XN9zDVLV9SADtRCHh2ORU8RzUROdA8C1QG9XAKnTgqQ1fM1Nm1MeYeZs6sCjfaoy
tZjZZlJ+cwKBgGp/sGy/xwlpeC88WBpVVm5qVF/w6Dv/ouKPzUN2xCE38FyX75Av
3qmM+zZjkID7p2qRboBnZ2C1gl0Y9cNHXdc6DOUv5TCdjA16BcFjsQqbCUG4b8HP
dfjO28dCT/xXmigaSBykiPRBPHHv0zm/HSKnmN12yzIyGfulQ7SQrEJXAoGBAK9w
dWcGR0Fti9hWxMzTkagPtWpTgY57JwZc+0jhp+3l9lk1qE/bAGKwlU6dw7FNw56q
ec3mw0wIjasipvhUzPJN3cwYyF51n7rNs0d46uQI/vHZnPhvF+xzS5/53hTa2Aio
LVF0d6PHMp6md8P0cESNweGQsnWSE911R5sYc41fAoGBANdV9PUdj3JnBNRXJaFy
U1E7Vi3wSCtAiBi6OzDOf+R71cnY2oHXgGgHNyg0I12sjs7dI/UTOPsI+ppBFyLG
F6JYMMX/nFgM3+I+wN7wTsEJEVcSJsgBAYSscHg5S5DkYXWM/70QbWrcVbwym0Id
a0eLOB1wC1HOh+mkVAG6eADC
-----END PRIVATE KEY-----
`.trim()

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: key,
  },
  scopes: SCOPES,
})

export const getSheetData = async () => {
  const sheets = google.sheets({ version: 'v4', auth })

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: 'Sheet1',
  })

  const rows = response.data.values
  return rows ?? []
}