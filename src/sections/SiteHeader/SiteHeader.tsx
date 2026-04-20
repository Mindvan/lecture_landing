import { Logo } from '../../components/ui/Logo/Logo'
import { navItems } from '../../data/navigation'

export function SiteHeader() {
  return (
    <header className='flex w-full'>
      <div className='flex min-h-0 flex-1 flex-row items-stretch'>
        <Logo width={153.28} height={42} color='#fff' />
        <nav className='flex flex-1 items-center justify-end'>
          <ul className='flex gap-x-[1.5rem]'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='body-m text-white transition-[color,text-decoration-color] duration-200 ease-out hover:text-blue'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
