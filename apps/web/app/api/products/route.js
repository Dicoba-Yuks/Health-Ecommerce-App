import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    message: 'Serverless Function Vercel terhubung!',
    mongodb_configured: !!process.env.MONGODB_URI,
  });
}