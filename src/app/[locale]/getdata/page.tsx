/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'

const fetchSheetData = async () => {
  const res = await fetch('/api/get-sheet-data')
  const json = await res.json()
  if (!res.ok) throw new Error(json.error || 'Failed to fetch sheet data')
  return json.data
}

const isArabic = (text: string) => /[\u0600-\u06FF]/.test(text)
const isFrench = (text: string) =>
  /bonjour|salut|formation|sécurité|cyber/.test(text.toLowerCase())

const GetDataPage = () => {
  const [data, setData] = useState<string[][]>([])
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const [arabic, setArabic] = useState<string[][]>([])
  const [french, setFrench] = useState<string[][]>([])
  const [english, setEnglish] = useState<string[][]>([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const sheet = await fetchSheetData()
        const rows = sheet.slice(1)
        setData(rows)
        categorizeResponses(rows)
      } catch (err) {
        console.error('Failed to load data:', err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const emails = data.map((row) => row[1]).filter(Boolean)
  console.log('📧 Emails:', emails)



  // 2. Categorize responses
  const categorizeResponses = (rows: string[][]) => {
    const ar: string[][] = []
    const fr: string[][] = []
    const en: string[][] = []

    rows.forEach((row) => {
      const q1 = row[6] || ''
      const q2 = row[7] || ''
      const combined = `${q1} ${q2}`

      if (isArabic(combined)) ar.push(row)
      else if (isFrench(combined)) fr.push(row)
      else en.push(row)
    })

    setArabic(ar)
    setFrench(fr)
    setEnglish(en)
  }


  // 3. Send email trigger
  const handleSendEmails = async () => {
    setSending(true)
    setResult(null)

    const emails = data.map((row) => row[1]).filter(Boolean)

    try {
      const res = await fetch('/api/send-meet-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails }), // 👈 send emails in payload
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to send emails')

      setResult('✅ Emails sent successfully!')
    } catch (err: any) {
      setResult(`❌ Error: ${err.message}`)
    } finally {
      setSending(false)
    }
  }

  if (loading) return <p className="p-4">Loading submissions...</p>

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Total Submissions: {data.length}</h1>
      <p>🟢 Arabic: {arabic.length}</p>
      <p>🔵 French: {french.length}</p>
      <p>🟣 English: {english.length}</p>

      <button
        onClick={handleSendEmails}
        disabled={sending}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {sending ? 'Sending...' : 'Send Emails'}
      </button>

      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  )
}

export default GetDataPage
