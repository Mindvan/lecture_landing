import { Logo } from '../../components/ui/Logo/Logo'
import { footerAboutLinks, footerContacts, footerSocialLinks } from '../../data/footer'

export function FooterSection() {
  return (
    <footer className='relative z-20 w-full bg-footer text-white'>
      <div className='mx-auto w-full max-w-[1128px] py-20 px-0'>
        <div className='flex justify-between'>
          <div>
            <a href='https://www.protei.ru/' className='inline-flex w-fit shrink-0'>
              <Logo width={168} height={47} color='#fff' />
            </a>
          </div>

          <div className='flex gap-[7.19rem]'>
            <nav
              className='flex w-[173px] shrink-0 flex-col gap-4'
              aria-labelledby='footer-about-heading'
            >
              <p id='footer-about-heading' className='body-m font-semibold'>
                О компании
              </p>
              <ul className='flex flex-col gap-2'>
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

            <div className='flex w-[173px] shrink-0 flex-col gap-4'>
              <p className='body-m font-semibold'>Контакты</p>
              <ul className='flex flex-col gap-2'>
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
              className='flex w-[154px] shrink-0 flex-col gap-4'
              aria-labelledby='footer-social-heading'
            >
              <p id='footer-social-heading' className='body-m font-semibold'>
                Социальные сети
              </p>
              <ul className='flex flex-col gap-2'>
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
