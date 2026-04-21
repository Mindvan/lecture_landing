import { MetaDivider } from '../../components/ui/MetaDivider/MetaDivider'
import { heroContent } from '../../data/hero'

export function HeroSection() {
  const { title, subtitle, showcase } = heroContent
  const [headlineLead] = title.split(' или ')
  const heroAccentWord = title.split(' или ')[1] ?? subtitle

  return (
    <section id='about' className='' aria-labelledby='hero-heading'>
      <div className='relative z-10 max-w-[54rem] flex flex-col gap-6 md:max-lg:gap-[27px]'>
        <p className='flex flex-wrap items-center text-lg gap-[0.7rem]'>
          <span className='body-l'>{showcase.title}</span>
          <MetaDivider />
          <span className='body-l'>{showcase.data}</span>
          <MetaDivider />
          <span className='body-l'>{showcase.location}</span>
        </p>

        <h1 id='hero-heading' className='h1'>
          <span className='block'>{headlineLead}</span>
          <span className='block'>
            или <span className='text-[#2ba1c7]'>{heroAccentWord}</span>
          </span>
        </h1>

        <div className='flex flex-col'>
          <p className='h3 mb-2 w-[40.31rem] lg:w-[50.00rem]'>{showcase.description.primary}</p>
          <p className='body-m w-100 lg:w-[50.00rem]'>{showcase.description.secondary}</p>
        </div>
        <div className='flex flex-col gap-6 flex-row'>
            <a href='#round-table' className='btn-primary'>
              Участвовать в круглом столе
            </a>
            <a href='#lecture' className='btn-secondary'>
              Зарегистрироваться на лекторий
            </a>
          </div>
      </div>
    </section>
  )
}
