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
          background: '#123B35',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '4px 5px',
          gap: 2,
          position: 'relative',
        }}
      >
        {/* Bar 1 - short, lime green */}
        <div style={{ width: 5, height: 7, borderRadius: 2, background: '#A8E986', flexShrink: 0 }} />
        {/* Bar 2 - mid, dark green */}
        <div style={{ width: 5, height: 12, borderRadius: 2, background: '#087A43', flexShrink: 0 }} />
        {/* Bar 3 - tall, gold */}
        <div style={{ width: 5, height: 16, borderRadius: 2, background: '#D6B56D', flexShrink: 0 }} />
      </div>
    ),
    { ...size }
  );
}
