import { getSheetData } from '@/utils/libs/sheets/getSheetData'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await getSheetData()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Failed to fetch sheet data:', error)
    return NextResponse.json({ success: false, error: 'Failed to fetch sheet data' }, { status: 500 })
  }
}
