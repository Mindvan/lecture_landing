import { Logo } from '../../components/ui/Logo/Logo'
import { footerAboutLinks, footerContacts, footerSocialLinks } from '../../data/footer'

export function FooterSection() {
  return (
    <footer className='relative z-20 w-full bg-footer text-white'>
      <div className='mx-auto w-full max-w-[1128px] py-20 px-0 max-md:pt-[27px] max-md:pb-12 max-md:pl-[61px] md:max-lg:py-[3.125rem] md:max-lg:px-16'>
        <div className='flex justify-between max-md:flex-col max-md:gap-5 md:max-lg:flex-col md:max-lg:gap-[1.38rem]'>
          <div>
            <a href='https://www.protei.ru/' className='inline-flex w-fit shrink-0'>
              <Logo
                width={168}
                height={47}
                color='#fff'
                className='max-md:w-[115px] max-md:h-[32px] md:max-lg:w-[7.1875rem] md:max-lg:h-[1.969375rem]'
              />
            </a>
          </div>

          <div className='flex gap-[7.19rem] max-md:flex-col max-md:relative max-md:left-[3px] max-md:gap-[21px] md:max-lg:gap-20'>
            <nav
              className='flex w-[173px] shrink-0 flex-col gap-4 max-md:gap-2 md:max-lg:gap-2'
              aria-labelledby='footer-about-heading'
            >
              <p
                id='footer-about-heading'
                className='body-m max-md:body-l font-semibold max-md:font-bold'
              >
                О компании
              </p>
              <ul className='flex flex-col gap-2 max-md:gap-0 max-md:leading-normal md:max-lg:gap-[0.06rem]'>
                {footerAboutLinks.map((item) => (
                  <li key={item.href} className='max-md:h-[18px]'>
                    <a
                      href={item.href}
                      className='body-m max-md:leading-normal transition-colors hover:text-blue'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className='flex w-[173px] shrink-0 flex-col gap-4 max-md:gap-2 md:max-lg:gap-2'>
              <p className='body-m max-md:body-l font-semibold max-md:font-bold'>Контакты</p>
              <ul className='flex flex-col gap-2 max-md:gap-0 max-md:leading-normal md:max-lg:gap-[0.06rem]'>
                {footerContacts.map((item) => (
                  <li key={item.href}  className='max-md:h-[18px]'>
                    <a
                      href={item.href}
                      className='body-m max-md:leading-normal transition-colors hover:text-blue'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <nav
              className='flex w-[154px] shrink-0 flex-col gap-4 max-md:gap-2 md:max-lg:gap-2'
              aria-labelledby='footer-social-heading'
            >
              <p id='footer-social-heading' className='body-m max-md:body-l font-semibold max-md:font-bold'>
                Социальные сети
              </p>
              <ul className='flex flex-col gap-2 max-md:gap-[2px] max-md:leading-normal md:max-lg:gap-[0.06rem]'>
                {footerSocialLinks.map((item) => (
                  <li key={item.label}  className='max-md:h-[18px]'>
                    <a
                      href={item.href}
                      className='body-m max-md:leading-normal transition-colors hover:text-blue'
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
