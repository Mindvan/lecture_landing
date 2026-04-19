import { useId } from 'react'

type CheckProps = {
  className?: string
  size?: number
}

export const Check = ({ className, size = 24 }: CheckProps) => {
  const uid = useId().replace(/:/g, '')
  const bgId = `${uid}-check-bg`
  const borderId = `${uid}-check-border`

  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-hidden
    >
      <circle
        cx='12'
        cy='12'
        r='11.5'
        fill={`url(#${bgId})`}
        fillOpacity='0.1'
        stroke={`url(#${borderId})`}
      />

      <path
        d='M6 12L10.5 17L18 8'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
      />

      <defs>
        <linearGradient id={bgId} x1='0' y1='12' x2='24' y2='12'>
          <stop stopColor='#006DEF' />
          <stop offset='1' stopColor='#72C7FC' />
        </linearGradient>

        <linearGradient id={borderId} x1='0' y1='12' x2='24' y2='12'>
          <stop stopColor='#77CDDD' stopOpacity='0.8' />
          <stop offset='1' stopColor='#0BA1DD' stopOpacity='0.8' />
        </linearGradient>
      </defs>
    </svg>
  )
}