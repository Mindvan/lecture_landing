import linesRoundTable from '../../assets/lines-2.svg'
import { Timeline, TimelineItem } from '../../components/ui/Timeline/Timeline'
import { roundtableProgramSections } from '../../data/roundtable'

export function RoundTableSection() {
  return (
    <section
      id='round-table'
      className='mt-63 relative flex flex-col gap-10'
      aria-labelledby='roundtable-program-heading'
    >
      <div
        className='pointer-events-none absolute left-1/2 top-0 z-0 w-screen max-w-[100vw] -translate-x-1/2'
        aria-hidden
      >
        <img
          src={linesRoundTable}
          alt=''
          width={1247}
          height={2019}
          className='pointer-events-none absolute right-0 top-0 h-auto max-w-none [transform:translate(460px,-330px)_scale(1)]'
          aria-hidden
        />
      </div>
      <div className='btn-secondary pointer-events-none absolute right-0 top-[-2px] z-10 h-auto w-90'>
        <p className='body-m whitespace-pre-line'>
          Дискуссионный формат <br /> с экспертами отрасли
        </p>
      </div>

      <div className='relative z-10 flex flex-col gap-[0.38rem]'>
        <h2 id='roundtable-program-heading' className='h2'>
          Программа круглого стола
        </h2>
        <p className='body-l mt-4'>Ключевые векторы дискуссии</p>
      </div>

      <div className='relative z-10 flex flex-col gap-12 mt-6'>
        {roundtableProgramSections.map((steps, sectionIndex) => {
          const sectionBadge = steps[0]?.badge
          const timelineMb =
            sectionBadge === 'ПРОИЗВОДИТЕЛИ'
              ? 'mb-6'
              : sectionBadge === 'ПОТРЕБИТЕЛИ'
                ? 'mb-4.5'
                : ''
          const bridgeTailDistance =
            sectionIndex < roundtableProgramSections.length - 1
              ? sectionBadge === 'ПРОИЗВОДИТЕЛИ'
                ? 'calc(var(--spacing) * (6 + 12 + 6))'
                : 'calc(var(--spacing) * (4.5 + 12 + 6))'
              : undefined

          return (
            <Timeline
              key={steps[0]?.title ?? steps.length}
              className={timelineMb}
              bridgeTailDistance={bridgeTailDistance}
            >
              {steps.map((step) => (
                <TimelineItem key={step.title}>
                  <p className='program-group caption w-fit uppercase h-6'>
                    {step.badge}
                  </p>
                  <h3 className='h3'>{step.title}</h3>
                  <p className='body-m w-full max-w-173 whitespace-pre-line'>{step.body}</p>
                </TimelineItem>
              ))}
            </Timeline>
          )
        })}
      </div>
    </section>
  )
}
