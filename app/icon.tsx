import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#051A16',
          border: '1.5px solid #D6B56D',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <span
          style={{
            fontSize: 16,
            fontWeight: 900,
            color: '#F6E8B1',
            letterSpacing: 0.5,
            lineHeight: 1,
            display: 'flex',
          }}
        >
          LB
        </span>
      </div>
    ),
    { ...size }
  );
}
