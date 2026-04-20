import { industryChoiceItems } from '../../data/industry'

export function IndustrySection() {
  return (
    <section id='industry' className='mt-60' aria-labelledby='industry-heading'>
      <div className='flex flex-col gap-24'>
        <div className='flex max-w-[46rem] flex-col gap-6'>
          <h2 id='industry-heading' className='h2'>
            Точка выбора для отрасли ИТ
          </h2>
          <div className='flex flex-col gap-4'>
            <p className='h3'>Перед отраслью стоит практический вопрос:</p>
            <p className='body-l w-[35.25rem]'>
              как обеспечить реальную управляемость инфраструктуры и устойчивость КИИ, а не формальное соответствие требованиям?
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-6'>
          {industryChoiceItems.map((item) => (
            <article
              key={item.title}
              className='tiles flex h-full flex-col gap-[0.56rem] max-h-64'
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
              <p className='body-m whitespace-pre-line'>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

