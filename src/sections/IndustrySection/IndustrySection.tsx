import { industryChoiceItems } from '../../data/industry'
import { ResponsiveText } from '../../components/ResponsiveText/ResponsiveText.tsx'

function renderIndustryDescription(
  description:
    | string
    | {
        desktop: readonly string[]
        tablet: readonly string[]
      },
) {
  if (typeof description === 'string') return <span className='whitespace-pre-line'>{description}</span>
  return <ResponsiveText value={description} />
}

export function IndustrySection() {
  return (
    <section
      id='industry'
      className='max-md:mt-[7.5rem] md:mt-60 md:max-lg:mt-[162px]'
      aria-labelledby='industry-heading'
    >
      <div className='flex flex-col max-md:gap-8 gap-24 md:max-lg:gap-10'>
        <div className='flex max-w-[46rem] flex-col max-md:gap-2 gap-6'>
          <h2 id='industry-heading' className='h2'>
            Точка выбора для отрасли ИТ
          </h2>
          <div className='flex flex-col max-lg:gap-0 lg:gap-4'>
            <p className='body-l md:h3 md:max-lg:body-l'>Перед отраслью стоит практический вопрос:</p>
            <p className='body-l max-md:w-[16.875rem] w-[35.25rem]'>
              <span className='hidden md:max-lg:inline'>
                как обеспечить реальную управляемость инфраструктуры
                <br />
                и устойчивость КИИ, а не формальное соответствие требованиям?
              </span>
              <span className='md:max-lg:hidden'>
                как обеспечить реальную управляемость инфраструктуры и устойчивость КИИ, а не формальное соответствие требованиям?
              </span>
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 max-md:gap-[1.0625rem] gap-6 sm:grid-cols-2 md:max-lg:gap-3'>
          {industryChoiceItems.map((item) => (
            <article
              key={item.title}
              className='tiles flex h-full flex-col gap-2 max-md:pb-3 md:max-lg:pr-3 lg:gap-[0.44rem] [@media(min-width:800px)_and_(max-width:920px)]:h-[14.4375em] [@media(min-width:1024px)_and_(max-width:1240px)]:h-[20.5em]'
            >
              <div className='square-icons'>
                <img
                  src={item.icon}
                  alt=''
                  width={48}
                  height={48}
                  className='size-12'
                  aria-hidden
                />
              </div>
              <h3 className='h3'>{item.title}</h3>
              <p className='body-m'>{renderIndustryDescription(item.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

