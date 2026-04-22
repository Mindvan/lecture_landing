import { MetaDivider } from '../../components/ui/MetaDivider/MetaDivider'
import { heroContent } from '../../data/hero'

export function HeroSection() {
  const { title, subtitle, showcase } = heroContent
  const [headlineLead] = title.split(' или ')
  const heroAccentWord = title.split(' или ')[1] ?? subtitle

  return (
    <section id='about' className='' aria-labelledby='hero-heading'>
      <div className='relative z-10 max-w-[54rem] flex flex-col max-md:gap-[16px] gap-6 md:max-lg:gap-[27px]'>
        <p className='flex flex-wrap items-center text-lg gap-[0.3125rem] md:gap-[0.7rem] max-md:relative max-md:right-[0.125rem]'>
          <span className='max-md:inline md:hidden'>
            <MetaDivider />
          </span>
          <span className='body-l max-md:inline-block max-md:w-[5.375rem]'>{showcase.title}</span>
          <MetaDivider />
          <span className='body-l max-md:inline-block max-md:w-[5.375rem]'>{showcase.data}</span>
          <MetaDivider />
          <span className='body-l'>{showcase.location}</span>
        </p>

        <h1 id='hero-heading' className='h1 max-md:flex max-md:flex-col max-md:gap-[0.125rem]'>
          <span className='block'>{headlineLead}</span>
          <span className='block'>
            или <span className='text-[#2ba1c7]'>{heroAccentWord}</span>
          </span>
        </h1>

        <div className='flex flex-col'>
          <p className='h3 mb-2 max-md:w-[20rem] w-[40.31rem] lg:w-[50.00rem]'>{showcase.description.primary}</p>
          <p className='body-m w-100 lg:w-[50.00rem]'>{showcase.description.secondary}</p>
        </div>
        <div className='flex max-md:w-full max-md:flex-col max-md:gap-2 md:flex-row md:gap-6'>
            <a href='#round-table' className='btn-primary max-md:w-full md:w-auto'>
              Участвовать в круглом столе
            </a>
            <a href='#lecture' className='btn-secondary max-md:w-full md:w-auto'>
              Зарегистрироваться на лекторий
            </a>
          </div>
      </div>
    </section>
  )
}
