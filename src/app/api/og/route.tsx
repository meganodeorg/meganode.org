import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom right, #f0f9ff, #e0f7fa)',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 100,
            fontFamily: 'Space Grotesk',
            background: 'linear-gradient(to right, #0ea5e9, #38bdf8)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '20px',
          }}
        >
          <span>mega</span>
          <span style={{ marginLeft: '20px' }}>node</span>
        </div>
        <div
          style={{
            fontSize: 40,
            fontFamily: 'Space Grotesk',
            color: '#0369a1',
            textAlign: 'center',
          }}
        >
          Professional Web3 Validator
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
} 