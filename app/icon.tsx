import { ImageResponse } from 'next/og'

export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 10,
          background: 'linear-gradient(135deg, #1d4ed8, #2563EB)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}>
          <span style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 700,
            lineHeight: 1,
          }}>km</span>
          <span style={{
            fontSize: 14,
            color: 'white',
            fontWeight: 900,
            lineHeight: 1,
          }}>⇄</span>
          <span style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 700,
            lineHeight: 1,
          }}>mi</span>
        </div>
        <div style={{
          width: 28,
          height: 1,
          background: 'rgba(255,255,255,0.3)',
          borderRadius: 1,
        }} />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}>
          <span style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 700,
            lineHeight: 1,
          }}>kg</span>
          <span style={{
            fontSize: 14,
            color: 'white',
            fontWeight: 900,
            lineHeight: 1,
          }}>⇄</span>
          <span style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 700,
            lineHeight: 1,
          }}>lb</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
