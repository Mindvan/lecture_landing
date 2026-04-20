import type { ReactNode } from 'react'
import linesDecoration from '../assets/lines-1.svg'

type LandingLayoutProps = {
  children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className='relative min-h-[100svh] w-full bg-blue-dark font-montserrat text-white'>
      <img
        src={linesDecoration}
        alt=''
        width={1109.74}
        height={1087.73}
        className='pointer-events-none absolute right-0 top-0 z-0 h-auto [transform:translate(81px,-45px)_scale(1.4)]'
        aria-hidden
      />
      {children}
    </div>
  )
}
