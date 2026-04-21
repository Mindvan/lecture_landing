import { Logo } from '../../components/ui/Logo/Logo'
import { footerAboutLinks, footerContacts, footerSocialLinks } from '../../data/footer'

export function FooterSection() {
  return (
    <footer className='relative z-20 w-full bg-footer text-white'>
      <div className='mx-auto w-full max-w-[1128px] py-20 px-0 md:max-lg:py-[3.125rem] md:max-lg:px-16'>
        <div className='flex justify-between md:max-lg:flex-col md:max-lg:gap-[1.38rem]'>
          <div>
            <a href='https://www.protei.ru/' className='inline-flex w-fit shrink-0'>
              <Logo
                width={168}
                height={47}
                color='#fff'
                className='md:max-lg:w-[7.1875rem] md:max-lg:h-[1.969375rem]'
              />
            </a>
          </div>

          <div className='flex gap-[7.19rem] md:max-lg:gap-20'>
            <nav
              className='flex w-[173px] shrink-0 flex-col gap-4 md:max-lg:gap-2'
              aria-labelledby='footer-about-heading'
            >
              <p id='footer-about-heading' className='body-m font-semibold'>
                О компании
              </p>
              <ul className='flex flex-col gap-2 md:max-lg:gap-[0.06rem]'>
                {footerAboutLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className='body-m transition-colors hover:text-blue'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className='flex w-[173px] shrink-0 flex-col gap-4 md:max-lg:gap-2'>
              <p className='body-m font-semibold'>Контакты</p>
              <ul className='flex flex-col gap-2 md:max-lg:gap-[0.06rem]'>
                {footerContacts.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className='body-m transition-colors hover:text-blue'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav
              className='flex w-[154px] shrink-0 flex-col gap-4 md:max-lg:gap-2'
              aria-labelledby='footer-social-heading'
            >
              <p id='footer-social-heading' className='body-m font-semibold'>
                Социальные сети
              </p>
              <ul className='flex flex-col gap-2 md:max-lg:gap-[0.06rem]'>
                {footerSocialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className='body-m transition-colors hover:text-blue'
                      {...(item.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
