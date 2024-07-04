/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import { getProduct } from './page'
import { env } from '@/env'
import colors from 'tailwindcss/colors'
// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)
  const productImageUrl = new URL(product.image, env.APP_URL).toString()
  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[900],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={productImageUrl}
          alt={product.title}
          style={{ width: '100 %' }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
