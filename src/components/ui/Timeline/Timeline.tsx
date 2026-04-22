import { Children, cloneElement, isValidElement, useId } from 'react'
import type { ReactElement, ReactNode } from 'react'

type TimelineProps = {
  children: ReactNode
  className?: string
  bridgeTailDistance?: string
  startIndex?: number
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
  startIndex = 0,
}: TimelineProps) {
  const items = Children.toArray(children).filter((c) => isValidElement(c))

  return (
    <div
      className={`flex flex-col [--tl-node-pt:1.5rem] max-md:[--tl-node-pt:0] max-md:mb-0 max-md:gap-[1.25rem] max-md:[--tl-item-gap:1.25rem] gap-12 md:max-lg:gap-6 md:max-lg:[--tl-item-gap:1.5rem] lg:gap-[2.875rem] lg:[--tl-item-gap:2.875rem] ${className}`}
    >
      {items.map((child, i) => {
        if (!isValidElement(child)) return child
        const isLast = i === items.length - 1
        const tail = isLast ? bridgeTailDistance : undefined
        return cloneElement(child as ReactElement<TimelineItemProps>, {
          isLastInTimeline: isLast,
          tailBridgeDistance: tail,
          itemIndex: i + startIndex,
        })
      })}
    </div>
  )
}

export type TimelineItemProps = {
  children: ReactNode
  isLastInTimeline?: boolean
  tailBridgeDistance?: string
  itemIndex?: number
}

export function TimelineItem({
  children,
  isLastInTimeline = false,
  tailBridgeDistance,
  itemIndex,
}: TimelineItemProps) {
  const showConnector =
    !isLastInTimeline || tailBridgeDistance !== undefined
  const bottom = showConnector
    ? connectorBottom(isLastInTimeline, tailBridgeDistance)
    : undefined
  const mobileNodeTopPx =
    itemIndex === 1
      ? 15
      : itemIndex === 2
        ? 30
        : itemIndex === 3
          ? 45
          : itemIndex === 4
            ? 50
            : itemIndex === 5
              ? 65
              : 0
  const mobileNodeTop = `${mobileNodeTopPx}px`
  const mobileConnectorTop = `${48 + mobileNodeTopPx}px`
  const mobileConnectorHeight =
    itemIndex === 3 ? 'calc(100% - 21px)' : 'calc(100% - 12px)'

  return (
    <div className='timeline-item relative flex max-md:gap-0 gap-12 md:max-lg:gap-[2.125rem]'>
      <div
        aria-hidden
        className='relative z-0 flex w-12 shrink-0 flex-col items-center self-stretch pt-[var(--tl-node-pt,1.5rem)] max-md:pointer-events-none max-md:absolute max-md:inset-y-0 max-md:left-0 max-md:w-12 max-md:self-auto'
      >
        <div
          aria-hidden
          className='max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2 max-md:z-[1] max-md:top-[var(--tl-mobile-node-top)]'
          style={
            {
              '--tl-mobile-node-top': mobileNodeTop,
            } as React.CSSProperties
          }
        >
          <TimelineNode />
        </div>
        {showConnector ? (
          <div
            aria-hidden
            className='pointer-events-none absolute left-1/2 top-[calc(var(--tl-node-pt,1.5rem)+48px)] z-0 w-px -translate-x-1/2 bg-[#75C9EA] max-md:top-[var(--tl-mobile-connector-top)] max-md:h-[var(--tl-mobile-connector-h)] max-md:bottom-auto'
            style={
              {
                bottom,
                '--tl-mobile-connector-top': mobileConnectorTop,
                '--tl-mobile-connector-h': mobileConnectorHeight,
              } as React.CSSProperties
            }
          />
        ) : null}
      </div>
      <div className='relative z-[1] flex min-w-0 flex-1 flex-col max-md:pl-18 max-md:gap-2 gap-4 md:max-lg:gap-2'>
        {children}
      </div>
    </div>
  )
}
