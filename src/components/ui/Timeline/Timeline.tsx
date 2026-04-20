import { Children, cloneElement, isValidElement, useId } from 'react'
import type { CSSProperties, ReactElement, ReactNode } from 'react'

const timelineShellStyle = {
  ['--tl-item-gap']: '3rem',
  ['--tl-node-pt']: '1.5rem',
} as CSSProperties

type TimelineProps = {
  children: ReactNode
  className?: string
  bridgeTailDistance?: string
}

function connectorBottom(
  isLastInTimeline: boolean,
  tailBridgeDistance: string | undefined,
): string {
  if (isLastInTimeline && tailBridgeDistance) {
    return `calc(-1 * (${tailBridgeDistance}))`
  }
  if (isLastInTimeline) {
    return '0'
  }
  return 'calc(-1 * (var(--tl-item-gap) + var(--tl-node-pt)))'
}

function TimelineNode() {
  const uid = useId().replace(/:/g, '')
  const gradId = `${uid}-tl-node-fill`

  return (
    <svg
      width={48}
      height={48}
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='relative z-[1] shrink-0'
      aria-hidden
    >
      <circle
        cx='24'
        cy='24'
        r='23.5'
        fill={`url(#${gradId})`}
        fillOpacity={0.1}
        stroke='#75C9EA'
      />
      <circle cx='24' cy='24' r='8' fill='#75C9EA' />
      <defs>
        <linearGradient
          id={gradId}
          x1='0'
          y1='24'
          x2='48'
          y2='24'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#006DEF' />
          <stop offset='1' stopColor='#72C7FC' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Timeline({
  children,
  className = '',
  bridgeTailDistance,
}: TimelineProps) {
  const items = Children.toArray(children).filter((c) => isValidElement(c))

  return (
    <div
      className={`flex flex-col gap-12 ${className}`}
      style={timelineShellStyle}
    >
      {items.map((child, i) => {
        if (!isValidElement(child)) return child
        const isLast = i === items.length - 1
        const tail = isLast ? bridgeTailDistance : undefined
        return cloneElement(child as ReactElement<TimelineItemProps>, {
          isLastInTimeline: isLast,
          tailBridgeDistance: tail,
        })
      })}
    </div>
  )
}

export type TimelineItemProps = {
  children: ReactNode
  /** Пробрасывается из {@link Timeline}, не задавать вручную. */
  isLastInTimeline?: boolean
  /** Пробрасывается из {@link Timeline}, не задавать вручную. */
  tailBridgeDistance?: string
}

export function TimelineItem({
  children,
  isLastInTimeline = false,
  tailBridgeDistance,
}: TimelineItemProps) {
  const showConnector =
    !isLastInTimeline || tailBridgeDistance !== undefined
  const bottom = showConnector
    ? connectorBottom(isLastInTimeline, tailBridgeDistance)
    : undefined

  return (
    <div className='timeline-item relative flex gap-12'>
      <div className='relative flex w-12 shrink-0 flex-col items-center self-stretch pt-[var(--tl-node-pt,1.5rem)]'>
        <TimelineNode />
        {showConnector ? (
          <div
            aria-hidden
            className='pointer-events-none absolute left-1/2 top-[calc(var(--tl-node-pt,1.5rem)+48px)] z-0 w-px -translate-x-1/2 bg-[#75C9EA]'
            style={{ bottom }}
          />
        ) : null}
      </div>
      <div className='relative z-[1] flex min-w-0 flex-1 flex-col gap-4'>
        {children}
      </div>
    </div>
  )
}
