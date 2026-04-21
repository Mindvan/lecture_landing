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
    <section id='industry' className='mt-60 md:max-lg:mt-[162px]' aria-labelledby='industry-heading'>
      <div className='flex flex-col gap-24 md:max-lg:gap-10'>
        <div className='flex max-w-[46rem] flex-col gap-6'>
          <h2 id='industry-heading' className='h2'>
            Точка выбора для отрасли ИТ
          </h2>
          <div className='flex flex-col gap-4 md:max-lg:gap-0'>
            <p className='h3 md:max-lg:body-l'>Перед отраслью стоит практический вопрос:</p>
            <p className='body-l w-[35.25rem]'>
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

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:max-lg:gap-3'>
          {industryChoiceItems.map((item) => (
            <article
              key={item.title}
              className='tiles flex h-full flex-col gap-2 md:max-lg:pr-3 lg:gap-[0.44rem] max-h-64'
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

