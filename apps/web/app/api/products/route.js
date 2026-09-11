import { NextResponse } from 'next/server';

export async function GET() {
  const isMongoConfigured = !!process.env.MONGODB_URI;
  
  return NextResponse.json({
    status: 'success',
    message: 'Serverless Function Vercel terhubung!',
    environment: process.env.NODE_ENV,
    mongodb_configured: isMongoConfigured,
    timestamp: new Date().toISOString()
  });
}