import { Check } from '../../components/ui/Check/Check'
import { ResponsiveText } from '../../components/ResponsiveText/ResponsiveText.tsx'
import { participationFormats } from '../../data/formats'

export function FormatsSection() {
  return (
    <section id='formats' className='mt-36 md:max-lg:mt-45' aria-labelledby='formats-heading'>
      <div className='mx-auto mb-12 flex flex-col gap-6 items-center text-center'>
        <h2 id='formats-heading' className='h2'>
          Форматы участия
        </h2>
        <p className='body-l'>Выберите подходящий формат взаимодействия</p>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:max-lg:gap-4'>
        {participationFormats.map((card) => (
          <article
            key={card.title}
            className='tiles flex h-full flex-col gap-12 justify-between md:max-lg:h-[33.69rem]'
          >
            <div className='flex flex-col gap-3'>
              <div className='square-icons'>
                <img
                  src={card.icon}
                  alt=''
                  width={48}
                  height={48}
                  className='size-12'
                  aria-hidden
                />
              </div>

              <div className='flex flex-col gap-2'>
                <h3 className='h3'>{card.title}</h3>
                <p className='body-m text-blue'>{card.tag}</p>
              </div>

              <p className='body-m'>
                {typeof card.description === 'string' ? card.description : <ResponsiveText value={card.description} />}
              </p>

              <ul className='flex flex-col gap-4 md:max-lg:gap-[1.13rem]'>
                {card.bullets.map((line) => (
                  <li
                    key={typeof line === 'string' ? line : line.desktop.join(' ')}
                    className='flex items-center gap-3'
                  >
                    <Check className='shrink-0 text-white' size={22} />
                    <span className='body-m'>
                      {typeof line === 'string' ? line : <ResponsiveText value={line} />}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={card.cta.href}
              className={
                card.cta.variant === 'primary'
                  ? 'btn-primary inline-flex w-full items-center justify-center text-center md:max-lg:!h-[52px]'
                  : 'btn-secondary inline-flex w-full items-center justify-center text-center md:max-lg:!h-[52px]'
              }
            >
              {card.cta.label}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

